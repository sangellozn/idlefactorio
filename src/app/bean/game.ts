import { ResourceItem } from "./resource-item";
import { StockInfo } from "./stock-info";
import { Save } from "./save";
import { GameData } from "./game-data";
import { CraftingItem } from "./crafting-item";
import { ProductionInfo, ProductionQty } from "./production-info";
import { BuildableItem } from "./buildable-item";
import { Consumption } from "./consumption";
import { CraftingInfo } from "./crafting-info";

export class Game {

    private static instance:Game;

    public static roundDuration = 1000;

    public static saveInterval = 60000;

    private static localStorageKey = 'idlefactorio';

    private gameLoopIntervalId;
    private gameSaveIntervalId;

    private stocks: Map<string, StockInfo>;
    // Crafting items that extract resources.
    private extractingItems: Map<string, ProductionInfo>;
    // Crafting items that smelt resources.
    private smeltingItems: Map<string, ProductionInfo>;
    // Crafting items that produce resources.
    private craftingItems: Map<string, ProductionInfo>;

    private constructor() {
        GameData.initGameData();
    }

    public init():void {
        if (!this.load()) {
            this.initEmptyGame();
            this.save();
        }
        
        this.gameLoopIntervalId = window.setInterval(() => {this.gameLoop()}, Game.roundDuration);
        this.gameSaveIntervalId = window.setInterval(() => {this.save()}, Game.saveInterval);
    }

    public resetGame(): void {
        if (this.gameLoopIntervalId) { window.clearInterval(this.gameLoopIntervalId); this.gameLoopIntervalId = undefined; }
        if (this.gameSaveIntervalId) { window.clearInterval(this.gameSaveIntervalId); this.gameSaveIntervalId = undefined; }

        if (localStorage) {
            localStorage.removeItem(Game.localStorageKey);
        }

        location.reload(); //FIXME un peu dégueu.
    }

    private initEmptyGame(): void {
        this.stocks = new Map(GameData.resources.map((resource) => new StockInfo(resource)).map((si) : [string, StockInfo] => [si.resource.code, si]));

        // Initial stock values.
        this.increaseStock(GameData.resourcesByCode.get('IROPL'), 20);
        this.increaseStock(GameData.resourcesByCode.get('STO'), 5);

        this.extractingItems = new Map(
            GameData.resources.filter((resource) => resource.category === 'MINABLE').map((resource) => new ProductionInfo(
                resource, resource.craftedWith.map((craftingInfo) => new ProductionQty(0, craftingInfo))
            )).map((pi) : [string, ProductionInfo] => [pi.resource.code, pi])
        );
        this.smeltingItems = new Map(
            GameData.resources.filter((resource) => resource.category === 'SMELTABLE').map((resource) => new ProductionInfo(
                resource, resource.craftedWith.map((craftingInfo) => new ProductionQty(0, craftingInfo))
            )).map((pi) : [string, ProductionInfo] => [pi.resource.code, pi])
        );

        this.craftingItems = new Map(
            GameData.resources.filter((resource) => resource.category === 'CRAFTABLE').map((resource) => new ProductionInfo(
                resource, resource.craftedWith.map((craftingInfo) => new ProductionQty(0, craftingInfo))
            )).map((pi) : [string, ProductionInfo] => [pi.resource.code, pi])
        );
    }

    public gameLoop(): void {
        this.stocks.forEach((value, key) => {
            value.computeStockValue();
        });
    }

    public static getInstance():Game {
        if (!Game.instance) {
            Game.instance = new Game();
        }

        return Game.instance;
    }

    public getStockInfos():StockInfo[] {
        return Array.from(this.stocks.values());
    }

    public getExtractingItems():ProductionInfo[] {
        return Array.from(this.extractingItems.values());
    }

    public getSmeltingItems():ProductionInfo[] {
        return Array.from(this.smeltingItems.values());
    }

    public getCraftingItems():ProductionInfo[] {
        return Array.from(this.craftingItems.values());
    }

    public increaseStock(resource:ResourceItem, qty:number):void {
        this.stocks.get(resource.code).increaseStock(qty);
    }

    public decreaseStock(resource:ResourceItem, qty:number): void {
        this.stocks.get(resource.code).decreaseStock(qty);
    }

    public hasEnoughtStock(resource:ResourceItem, qty:number):boolean {
        return this.stocks.get(resource.code).stock >= qty;
    }

    /**
     * Check if the resource consumption + the provided quantity is not over the production.
     * 
     * @param resource the checked resource.
     * @param qty the qty that will be consummed.
     */
    public hasEnoughtProduction(resource:ResourceItem, targetProdQty:number, targetConsQty:number):boolean {
        const stockInfo = this.stocks.get(resource.code);
        return stockInfo.producing + targetProdQty >= stockInfo.consuming + targetConsQty;
    }

    public save():void {
        if (localStorage) {
            localStorage.setItem(Game.localStorageKey, new Save(this).toString());
        } else {
            console.error('localStorage is not defined, saving not possible.');
        }
    }

    private load():boolean {
        if (localStorage) {
            const savedGame = localStorage.getItem(Game.localStorageKey);

            if (savedGame !== null) {
                this.loadSavedGame(JSON.parse(savedGame));
                return true;
            }
        } else {
            console.error('localstorage is not defined, loading not possible.');
        }

        return false;
    }

    private loadSavedGame(savedGame:Save): void {
        // Loading stock informations.
        this.stocks = new Map();
        for (let resourceKey of Object.keys(savedGame.stocks)) {
            this.stocks.set(resourceKey, new StockInfo(GameData.resourcesByCode.get(resourceKey)
                , savedGame.stocks[resourceKey].stock
                , savedGame.stocks[resourceKey].producing
                , savedGame.stocks[resourceKey].consuming));
        }

        // Loading production items.
        this.smeltingItems = new Map();
        this.craftingItems = new Map();
        this.extractingItems = new Map();

        for (let resourceKey of Object.keys(savedGame.productionInfos)) {
            const resource = GameData.resourcesByCode.get(resourceKey);
            const craftingItem:any = savedGame.productionInfos[resourceKey];
            const productionInfo = new ProductionInfo(resource, resource.craftedWith.map((craftingInfo, idx) => new ProductionQty(craftingItem[idx].nb, craftingInfo)))
            
            if (resource.category === 'MINABLE') {
                this.extractingItems.set(resource.code, productionInfo);
            } else if (resource.category === 'SMELTABLE') {
                this.smeltingItems.set(resource.code, productionInfo);
            } else if (resource.category === 'CRAFTABLE') {
                this.craftingItems.set(resource.code, productionInfo);
            }
        }
    }

    public canBuild(item:BuildableItem):boolean {
        for (let buildCost of item.buildCost) {
            if (!this.hasEnoughtStock(buildCost.resource, buildCost.qty)) {
                return false;
            }
        }

        return true;
    }

    /**
     * If building the crafter will not depleat the stock.
     * 
     * @param resource the resource the crafter is built for.
     * @param item the crafting item built.
     */
    public canBuildConsumption(resource:ResourceItem, item:CraftingItem):boolean {
        if (!this.canBuild(item)) {
            return false;
        }
        const productionInfo = this.getProductionInfo(resource);
        const correspondingProductionQty = this.getProductionQty(productionInfo, item);

        const allConsumption:Consumption[] = [].concat(correspondingProductionQty.craftingInfo.consume)
            .concat(correspondingProductionQty.craftingInfo.craftingItem.consumme);
        const allConsumptionObj = allConsumption.reduce((acc, curr) => {
            if (!acc[curr.resources.code]) {
                acc[curr.resources.code] = curr.qty;
            } else {
                acc[curr.resources.code] += curr.qty;
            }

            return acc;
        }, {});

        // Need to forcast all consumption vs production.
        for (let consKey of Object.keys(allConsumptionObj)) {
            if (!this.hasEnoughtProduction(GameData.resourcesByCode.get(consKey), consKey === resource.code ? correspondingProductionQty.craftingInfo.produces : 0
                , allConsumptionObj[consKey])) {
                return false;
            }
        }

        return true;
    }

    public craftResourceItem(item:ResourceItem): void {
        this.craftBuildableItem(item);
        Game.getInstance().increaseStock(item, 1);
    }

    private craftBuildableItem(item: BuildableItem): void {
        for (let buildCost of item.buildCost) {
            this.decreaseStock(buildCost.resource, buildCost.qty);
        }
    }                   

    private getProductionInfo(resource:ResourceItem):ProductionInfo {
        if (resource.category === 'MINABLE') {
            return this.extractingItems.get(resource.code);
        } else if (resource.category === 'SMELTABLE') {
            return this.smeltingItems.get(resource.code);
        } else if (resource.category === 'CRAFTABLE') {
            return this.craftingItems.get(resource.code);
        } else {
            console.error('Invalid resource category.');
        }

        return undefined;
    }

    private getProductionQty(productionInfo:ProductionInfo, craftingItem:CraftingItem): ProductionQty {
        return productionInfo.productionQtys.filter((item) => item.craftingInfo.craftingItem.id === craftingItem.id)[0];
    }

    public craftCraftingItem(resource:ResourceItem, craftingItem:CraftingItem): void {
        const productionInfo = this.getProductionInfo(resource);
        const correspondingProductionQty = this.getProductionQty(productionInfo, craftingItem);
        
        this.craftBuildableItem(craftingItem);
        correspondingProductionQty.increment();
        
        for (let consummeInfo of craftingItem.consumme) {
            this.stocks.get(consummeInfo.resources.code).increaseConsumption(consummeInfo.qty);
        }

        for (let consummeInfo of correspondingProductionQty.craftingInfo.consume) {
            this.stocks.get(consummeInfo.resources.code).increaseConsumption(consummeInfo.qty);
        }

        this.stocks.get(resource.code).increaseProduction(correspondingProductionQty.craftingInfo.produces);
    }

}

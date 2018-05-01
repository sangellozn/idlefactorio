import { ResourceItem } from "./resource-item";
import { StockInfo } from "./stock-info";
import { Save } from "./save";
import { GameData } from "./game-data";
import { CraftingItem } from "./crafting-item";
import { ProductionInfo, ProductionQty } from "./production-info";
import { BuildableItem } from "./buildable-item";
import { Consumption } from "./consumption";
import { Recipe } from "./recipe";

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

    private electricityItem: ProductionInfo;

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
        this.stocks = new Map(GameData.resources.filter((resource) => resource.category.includes('STOCKABLE'))
            .map((resource) => new StockInfo(resource))
            .map((si) : [string, StockInfo] => [si.resource.code, si])
        );

        // Initial stock values.
        this.increaseStock(GameData.resourcesByCode.get('IROPL'), 20);
        this.increaseStock(GameData.resourcesByCode.get('STO'), 5);
        this.increaseStock(GameData.resourcesByCode.get('STOFUR'), 1);

        this.extractingItems = new Map(
            GameData.resources.filter((resource) => resource.category.includes('MINABLE')).map((resource) => new ProductionInfo(
                resource, resource.craftedWith.map((recipe) => new ProductionQty(0, recipe))
            )).map((pi) : [string, ProductionInfo] => [pi.resource.code, pi])
        );
        this.smeltingItems = new Map(
            GameData.resources.filter((resource) => resource.category.includes('SMELTABLE')).map((resource) => new ProductionInfo(
                resource, resource.craftedWith.map((recipe) => new ProductionQty(0, recipe))
            )).map((pi) : [string, ProductionInfo] => [pi.resource.code, pi])
        );

        this.craftingItems = new Map(
            GameData.resources.filter((resource) => resource.category.includes('CRAFTABLE')).map((resource) => new ProductionInfo(
                resource, resource.craftedWith.map((recipe) => new ProductionQty(0, recipe))
            )).map((pi) : [string, ProductionInfo] => [pi.resource.code, pi])
        );

        const elec = GameData.resourcesByCode.get('ELEC');
        this.electricityItem = new ProductionInfo(elec, elec.craftedWith.map((recipe) => new ProductionQty(0, recipe)));
    }

    public gameLoop(): void {
        this.stocks.forEach((value, key) => {
            // Electricity cannot be stored.
            // TODO evolve on electricity storage.
            if (!['ELEC', 'WATER'].includes(value.resource.code)) {
                value.computeStockValue();
            }
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

    public getElectricityItem():ProductionInfo {
        return this.electricityItem;
    }

    public increaseStock(resource:ResourceItem, qty:number):void {
        this.stocks.get(resource.code).increaseStock(qty);
    }

    public decreaseStock(resource:ResourceItem, qty:number): void {
        this.stocks.get(resource.code).decreaseStock(qty);
    }

    public hasEnougthStock(resource:ResourceItem, qty:number):boolean {
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
            console.log('Saving game...');
            localStorage.setItem(Game.localStorageKey, new Save(this).toString());
            console.log('Game saved !');
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
            const productionInfo = new ProductionInfo(resource, resource.craftedWith.map((recipe, idx) => new ProductionQty(craftingItem[idx].nbBuild, recipe)))
            
            if (resource.category.includes('MINABLE')) {
                this.extractingItems.set(resource.code, productionInfo);
            } else if (resource.category.includes('SMELTABLE')) {
                this.smeltingItems.set(resource.code, productionInfo);
            } else if (resource.category.includes('CRAFTABLE')) {
                this.craftingItems.set(resource.code, productionInfo);
            } else if (resource.category.includes('ELEC')) {
                this.electricityItem = productionInfo;
            }
        }
    }

    public canBuild(item:BuildableItem):boolean {
        for (let buildCost of item.buildCost) {
            if (!this.hasEnougthStock(buildCost.resource, buildCost.qty)) {
                return false;
            }
        }

        return true;
    }

    public canCraft(item:ResourceItem):boolean {
        if (!this.canBuild(item)) {
            return false;
        }

        for (let buildCost of item.handCraftCost) {
            if (!this.hasEnougthStock(buildCost.resource, buildCost.qty)) {
                return false;
            }
        }

        return true;
    }
    

    public canConsume(resource:ResourceItem, targetConsQty:number) {
        return this.hasEnoughtProduction(resource, 0, targetConsQty);
    }

    /*public getCorrespondingRecipe(productionInfo:ProductionInfo, item:CraftingItem): Recipe {
        return productionInfo.productionQtys.filter((pqty) => pqty.recipe.craftingItem.code === item.code)[0].recipe;
    }*/

    /**
     * If building the crafter will not depleat the stock.
     * 
     * @param resource the resource the crafter is built for.
     * @param item the crafting item built.
     */
    public canBuildConsumption(resource:ResourceItem, item:CraftingItem, checkBuild:boolean = true):boolean {
        if (checkBuild && !this.canBuild(item)) {
            return false;
        }
        const productionInfo = this.getProductionInfo(resource);
        //const correspondingRecipe = this.getCorrespondingRecipe(productionInfo, item);
        let correspondingProductionQty = this.getProductionQty(productionInfo, item);

        // The crafting item does not produce the checked resource
        if (correspondingProductionQty === undefined) {
            correspondingProductionQty = new ProductionQty(0, new Recipe([], null, []));
        }

        const allConsumption:Consumption[] = [].concat(correspondingProductionQty.recipe.consume)
            .concat(item.consumme);
        let allConsumptionObj = allConsumption.reduce((acc, curr) => {
            if (!acc[curr.resource.code]) {
                acc[curr.resource.code] = curr.qty;
            } else {
                acc[curr.resource.code] += curr.qty;
            }

            return acc;
        }, {});

        // Removing to all consumption the recipe production.
        allConsumptionObj = correspondingProductionQty.recipe.produces.reduce((acc, pv) => {
            if (!acc[pv.resourceItem.code]) {
                acc[pv.resourceItem.code] = 0;
            }

            acc[pv.resourceItem.code] -= pv.produces;
            return acc;
        }, allConsumptionObj);

        // Need to forcast all consumption vs production.
        for (let consKey of Object.keys(allConsumptionObj)) {
            if (!this.hasEnoughtProduction(GameData.resourcesByCode.get(consKey), 0, allConsumptionObj[consKey])) {
                return false;
            }
        }

        return true;
    }

    public craftResourceItem(item:ResourceItem): void {
        this.craftBuildableItem(item);
        for (let handCost of item.handCraftCost) {
            this.decreaseStock(handCost.resource, handCost.qty);
        }
    }

    public pickupResourceItem(item:ResourceItem): void {
        this.increaseStock(item, 1);
    }

    private craftBuildableItem(item: BuildableItem): void {
        for (let buildCost of item.buildCost) {
            this.decreaseStock(buildCost.resource, buildCost.qty);
        }
    }

    private destructBuildableItem(item: BuildableItem): void {
        for (let buildCost of item.buildCost) {
            this.increaseStock(buildCost.resource, buildCost.qty);
        }
    }

    private getProductionInfo(resource:ResourceItem):ProductionInfo {
        if (resource.category.includes('MINABLE')) {
            return this.extractingItems.get(resource.code);
        } else if (resource.category.includes('SMELTABLE')) {
            return this.smeltingItems.get(resource.code);
        } else if (resource.category.includes('CRAFTABLE')) {
            return this.craftingItems.get(resource.code);
        } else if (resource.category.includes('ELEC')) {
            return this.getElectricityItem();
        } else {
            console.error('Invalid resource category : ', resource.category);
        }

        return undefined;
    }

    private getProductionQty(productionInfo:ProductionInfo, craftingItem:CraftingItem): ProductionQty {
        return productionInfo.productionQtys.filter((item) => item.recipe.craftingItem.code === craftingItem.code)[0];
    }

    public buildCraftingItem(resource:ResourceItem, craftingItem:CraftingItem): void {
        const productionInfo = this.getProductionInfo(resource);
        const correspondingProductionQty = this.getProductionQty(productionInfo, craftingItem);
        
        this.craftBuildableItem(craftingItem);
        correspondingProductionQty.increment();
        
        for (let consummeInfo of craftingItem.consumme) {
            this.stocks.get(consummeInfo.resource.code).increaseConsumption(consummeInfo.qty);
        }

        for (let consummeInfo of correspondingProductionQty.recipe.consume) {
            this.stocks.get(consummeInfo.resource.code).increaseConsumption(consummeInfo.qty);
        }

        for (let produceValue of correspondingProductionQty.recipe.produces) {
            this.stocks.get(produceValue.resourceItem.code).increaseProduction(produceValue.produces);
        }
    }

    public destructCraftingItem(resource:ResourceItem, craftingItem:CraftingItem): void {
        const productionInfo = this.getProductionInfo(resource);
        const correspondingProductionQty = this.getProductionQty(productionInfo, craftingItem);
        
        this.destructBuildableItem(craftingItem);
        correspondingProductionQty.decrement();
        
        for (let consummeInfo of craftingItem.consumme) {
            this.stocks.get(consummeInfo.resource.code).decreaseConsumption(consummeInfo.qty);
        }

        for (let consummeInfo of correspondingProductionQty.recipe.consume) {
            this.stocks.get(consummeInfo.resource.code).decreaseConsumption(consummeInfo.qty);
        }

        for (let produceValue of correspondingProductionQty.recipe.produces) {
            this.stocks.get(produceValue.resourceItem.code).decreaseProduction(produceValue.produces);
        }
    }

}

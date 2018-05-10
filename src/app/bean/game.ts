import { ResourceItem } from "./resource-item";
import { StockInfo } from "./stock-info";
import { Save } from "./save";
import { GameData } from "./game-data";
import { CraftingItem } from "./crafting-item";
import { ProductionInfo, ProductionQty } from "./production-info";
import { BuildableItem } from "./buildable-item";
import { Consumption } from "./consumption";
import { Recipe } from "./recipe";
import { ResearchItem } from "./research-item";
import { Utils } from "./utils";

export class Game {

    private static instance:Game;

    public static roundDuration = 1000;

    public static saveInterval = 60000;

    public static maxBonusPercent = 50;

    private static localStorageKey = 'idlefactorio';

    private gameLoopIntervalId;
    private gameSaveIntervalId;

    private searchIsRunning;

    private stocks: Map<string, StockInfo>;
    // Crafting items that extract resources.
    private extractingItems: Map<string, ProductionInfo>;
    // Crafting items that smelt resources.
    private smeltingItems: Map<string, ProductionInfo>;
    // Crafting items that produce resources.
    private craftingItems: Map<string, ProductionInfo>;
    // Bonus items number.    
    private bonusItems: Map<string, number>;

    private electricityItem: ProductionInfo;

    private constructor() {
        GameData.initGameData();
        this.searchIsRunning = false;
    }

    public init():void {
        if (!this.load()) {
            this.initEmptyGame();
        }
        this.save();
        this.gameLoopIntervalId = window.setInterval(() => {this.gameLoop()}, Game.roundDuration);
        this.gameSaveIntervalId = window.setInterval(() => {this.save()}, Game.saveInterval);
    }

    public resetGame(): void {
        if (this.gameLoopIntervalId) { window.clearInterval(this.gameLoopIntervalId); this.gameLoopIntervalId = undefined; }
        if (this.gameSaveIntervalId) { window.clearInterval(this.gameSaveIntervalId); this.gameSaveIntervalId = undefined; }

        if (localStorage) {
            localStorage.removeItem(Game.localStorageKey);
        }

        window.location.href = '/';
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
        this.bonusItems = new Map();
    }

    public gameLoop(): void {
        this.stocks.forEach((value, key) => {
            // Electricity and water are not stored.
            if (!['ELEC', 'WATER'].includes(value.resource.code)) {
                value.computeStockValue();
            }
        });
    }

    private flashforward(ffseconds:number): void {
        // Increasing productions during absence.
        for (let stockInfo of this.getStockInfos()) {
            this.increaseStock(stockInfo.resource, stockInfo.producing * ffseconds);
        }
    }

    public importSavedGame(importedSave:string): void {
        if (localStorage) {
            localStorage.setItem(Game.localStorageKey, Utils.b64_to_utf8(importedSave));
        } else {
            console.error('Cannot use localStorage');
        }

        window.location.href = '/';
    }

    public static getInstance():Game {
        if (!Game.instance) {
            Game.instance = new Game();
        }

        return Game.instance;
    }

    public getStockInfos():StockInfo[] {
        return Array.from(this.stocks.values()).filter((si) => si.resource.unlockedBy === null || si.resource.unlockedBy.isUnlocked);
    }

    public getExtractingItems():ProductionInfo[] {
        return Array.from(this.extractingItems.values()).filter((pi) => pi.resource.unlockedBy === null || pi.resource.unlockedBy.isUnlocked);
    }

    public getSmeltingItems():ProductionInfo[] {
        return Array.from(this.smeltingItems.values()).filter((pi) => pi.resource.unlockedBy === null || pi.resource.unlockedBy.isUnlocked);
    }

    public getCraftingItems():ProductionInfo[] {
        return Array.from(this.craftingItems.values()).filter((pi) => pi.resource.unlockedBy === null || pi.resource.unlockedBy.isUnlocked);
    }

    public getElectricityItem():ProductionInfo {
        return this.electricityItem;
    }

    public getResearchItems():ResearchItem[] {
        return GameData.researchItems;
    }

    public getSciencePackItems(): StockInfo[] {
        return Array.from(this.stocks.values())
            .filter((st) => st.resource.category.includes('SCIENCE_PACK'))
            .filter((st) => st.resource.unlockedBy === null || st.resource.unlockedBy.isUnlocked);
    }

    public getBonusItems(): ResourceItem[] {
        return GameData.resources.filter((item) => item.category.includes('BONUS'));
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
            localStorage.setItem(Game.localStorageKey, this.getSaveAsString());
            console.log('Game saved !');
        } else {
            console.error('localStorage is not defined, saving not possible.');
        }
    }

    public getSaveAsString():string {
        return new Save(this).toString();
    }

    private load():boolean {
        if (localStorage) {
            const savedGame = localStorage.getItem(Game.localStorageKey);

            if (savedGame !== null) {
                try {
                    this.loadSavedGame(JSON.parse(savedGame));
                    return true;
                } catch (e) {
                    console.error('Exception while loading game: ', e);
                    return false;
                }
            }
        } else {
            console.error('localstorage is not defined, loading not possible.');
        }

        return false;
    }

    private loadSavedGame(savedGame:Save): void {
        // Loading stock informations.
        this.stocks = new Map();
        for (let resource of GameData.resources) {
            if (savedGame.stocks[resource.code]) {
                this.stocks.set(resource.code, new StockInfo(GameData.resourcesByCode.get(resource.code)
                    , savedGame.stocks[resource.code].stock
                    , savedGame.stocks[resource.code].producing
                    , savedGame.stocks[resource.code].consuming));
            } else {
                this.stocks.set(resource.code, new StockInfo(GameData.resourcesByCode.get(resource.code), 0, 0, 0));
            }
        }

        // Loading production items.
        this.smeltingItems = new Map();
        this.craftingItems = new Map();
        this.extractingItems = new Map();

        for (let resource of GameData.resources) {
            let productionInfo:ProductionInfo = null;
            if (savedGame.productionInfos[resource.code]) {
                productionInfo = new ProductionInfo(resource, resource.craftedWith.map((recipe, idx) => new ProductionQty((savedGame.productionInfos[resource.code][idx] || { nbBuild: 0 }).nbBuild, recipe)));
            } else {
                productionInfo = new ProductionInfo(resource, resource.craftedWith.map((recipe, idx) => new ProductionQty(0, recipe)));
            }

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

        const now = new Date();
        const ffseconds = (now.getTime() - new Date(savedGame.createdAt).getTime()) / 1000;

        for (let search of GameData.researchItems) {
            if (savedGame.searchProgress[search.code]) {
                search.isUnlocked = savedGame.searchProgress[search.code].unlocked;
                search.searchProgression = savedGame.searchProgress[search.code].searchPro;
                search.searching = savedGame.searchProgress[search.code].searching;
                
                if (search.searching) {
                    // Checking if the search is done during abscence.
                    const timeRemaining = search.duration - (search.duration * (search.searchProgression / 100));

                    if (timeRemaining < ffseconds) {
                        search.isUnlocked = true;
                        search.searching = false;
                        search.searchProgression = 100;
                    } else {
                        // Compute
                        search.searchProgression += (ffseconds / search.duration * 100);
                        this.resumeSearch(search);
                    }

                }
            }
        }

        this.bonusItems = new Map();
        // Loading bonus
        for (let bonus of this.getBonusItems()) {
            this.bonusItems.set(bonus.code, this.stocks.get(bonus.code).stock);
        }

        this.flashforward(ffseconds);
    }

    public canBuild(item:BuildableItem):boolean {
        if (item.unlockedBy !== null && !item.unlockedBy.isUnlocked) {
            return false;
        }

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

        if (item.category.includes('BONUS')) {
            this.bonusItems.set(item.code, this.bonusItems.get(item.code) + 1);
        }
    }

    public getLabBonusValue():number {
        return this.getBonusValue(GameData.resourcesByCode.get('LAB'));
    }

    public getBonusValue(item:ResourceItem): number {
        if (this.bonusItems.get(item.code) === undefined || this.bonusItems.get(item.code) === 0) {
            return 0;
        }
        return Math.pow(Game.maxBonusPercent, 1 - (1 / this.bonusItems.get(item.code)));
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

    public canSearch(research:ResearchItem): boolean {
        if (research.isUnlocked || this.searchIsRunning) {
            return false;
        }

        for (let dependsOn of research.dependsOn) {
            if (!dependsOn.isUnlocked) {
                return false;
            }
        }

        for (let resourceCost of research.cost) {
            if (!this.hasEnougthStock(resourceCost.resource, resourceCost.qty)) {
                return false;
            }
        }

        return true;
    }

    public search(research:ResearchItem): void {
        for (let resourceCost of research.cost) {
            this.decreaseStock(resourceCost.resource, resourceCost.qty);
        }

        this.launchSearch(research);
    }

    private launchSearch(research:ResearchItem): void {
        this.searchIsRunning = true;
        research.searching = true;

        const intervalId = window.setInterval(() => {
            const progresStep = 100 / research.duration;
            if (research.searchProgression + progresStep >= 100) {
                research.searchProgression = 100;
                research.searching = false;
                research.isUnlocked = true;
                this.searchIsRunning = false;
                window.clearInterval(intervalId);
            } else {
                research.searchProgression += progresStep;
            }
        }, 1000);
    }

    public resumeSearch(research:ResearchItem): void {
        this.launchSearch(research);
    }

}

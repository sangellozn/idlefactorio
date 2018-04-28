import { ResourceItem } from "./resource-item";
import { StockInfo } from "./stock-info";
import { ResourceData } from "./resource-data";
import { Save } from "./save";
import { CraftingData } from "./crafting-data";
import { CraftingItem } from "./crafting-item";

export class Game {

    private static instance:Game;

    public static roundDuration = 1000;

    private stocks: Map<string, StockInfo>;
    // Crafting items that extract resources.
    private extractingItemsQty: Map<string, number>;
    // Crafting items that produce resources.
    private craftingItemsQty: Map<string, number>;

    private constructor() {
        // Nothing.
    }

    public init():void {
        this.stocks = new Map(Array.of(
            new StockInfo(ResourceData.resourcesByCode.get('COAL')),
            new StockInfo(ResourceData.resourcesByCode.get('IRONO')),
            new StockInfo(ResourceData.resourcesByCode.get('COPO')),
            new StockInfo(ResourceData.resourcesByCode.get('STO')),
            new StockInfo(ResourceData.resourcesByCode.get('IROPL')),
            new StockInfo(ResourceData.resourcesByCode.get('COPPL')),
            new StockInfo(ResourceData.resourcesByCode.get('STEPL'))
        ).map((si) : [string, StockInfo] => [si.resource.code, si]));

        this.increaseStock(ResourceData.resourcesByCode.get('IROPL'), 20);
        this.increaseStock(ResourceData.resourcesByCode.get('STO'), 5);
        this.extractingItemsQty = new Map(CraftingData.craftings.filter((item) => CraftingData.craftingsExtractorCodes.includes(item.code)).map((item) : [string, number] => [item.code, 0]));

        window.setInterval(() => {this.gameLoop()}, Game.roundDuration);
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

    public getExtractingItems():Map<string, number> {
        return this.extractingItemsQty;
    }

    public increaseStock(resource:ResourceItem, qty:number):void {
        this.stocks.get(resource.code).increaseStock(qty);
    }

    public decreaseStock(resource:ResourceItem, qty:number): void {

    }

    public hasEnoughtStock(resource:ResourceItem, qty:number):boolean {
        return this.stocks.get(resource.code).stock >= qty;
    }

    public save():void {
        if (localStorage) {
            localStorage.setItem('idlefactorio', new Save(this.stocks).toString());
        } else {
            console.error('localStorage is not defined, saving not possible');
        }
    }

    public load():void {
        //if (localStorage && localStorage.getItem('idlefactorio'));
    }

    public canBuild(item:CraftingItem):boolean {
        for (let buildCost of item.buildCost) {
            if (!this.hasEnoughtStock(buildCost.resource, buildCost.qty)) {
                return false;
            }
        }

        return true;
    }

}

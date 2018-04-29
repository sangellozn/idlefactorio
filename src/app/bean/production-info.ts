import { ResourceItem } from "./resource-item";
import { CraftingInfo } from "./crafting-info";

export class ProductionQty {

    /** Resource of item corresponding to the crafter. */
    public nb:number;
    public craftingInfo:CraftingInfo;

    public constructor(nb:number, craftingInfo:CraftingInfo) {
        this.nb = nb;
        this.craftingInfo = craftingInfo;
    }

    public increment():void {
        this.nb++;
    }

}

export class ProductionInfo {

    public resource:ResourceItem;
    public productionQtys:ProductionQty[];

    public constructor(resource:ResourceItem, productionQtys:ProductionQty[]) {
        this.resource = resource;
        this.productionQtys = productionQtys;
    }

}

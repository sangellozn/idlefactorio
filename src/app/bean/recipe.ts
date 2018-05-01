import { CraftingItem } from "./crafting-item";
import { Consumption } from "./consumption";
import { ResourceItem } from "./resource-item";

export class ProductionValue {
    public produces:number;
    public resourceItem:ResourceItem;

    public constructor(produces:number, resourceItem:ResourceItem) {
        this.produces = produces;
        this.resourceItem = resourceItem;
    }
}

export class Recipe {

    /** number of item produced by second. */
    public produces:ProductionValue[];
    public craftingItem:CraftingItem;
    public consume:Consumption[];

    public constructor(produces:ProductionValue[], craftingItem:CraftingItem, consume:Consumption[]) {
        this.produces = produces;
        this.craftingItem = craftingItem;
        this.consume = consume;
    }

}

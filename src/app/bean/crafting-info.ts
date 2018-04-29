import { CraftingItem } from "./crafting-item";
import { Consumption } from "./consumption";

export class CraftingInfo {

    /** number of item produced by second. */
    public produces:number;
    public craftingItem:CraftingItem;
    public consume:Consumption[];

    public constructor(produces:number, craftingItem:CraftingItem, consume:Consumption[]) {
        this.produces = produces;
        this.craftingItem = craftingItem;
        this.consume = consume;
    }

}

import { BuildCost } from "./build-cost";
import { CraftingInfo } from "./crafting-info";
import { BuildableItem } from "./buildable-item";

export class ResourceItem extends BuildableItem {

    public id:number;
    public code:string;
    public name:string;
    public icon:string;
    public handCrafted:boolean;
    public craftDuration:number;
    public craftedWith:CraftingInfo[];
    public category:string;

    constructor(id: number, code: string, name: string, icon: string, handCrafted:boolean, craftDuration:number, buildCost:BuildCost[], craftedWith:CraftingInfo[], category:string) {
        super(buildCost);
        this.id = id;
        this.code = code;
        this.name = name;
        this.icon = icon;
        this.handCrafted = handCrafted;
        this.craftDuration = craftDuration;
        this.craftedWith = craftedWith;
        this.category = category;
    }

}

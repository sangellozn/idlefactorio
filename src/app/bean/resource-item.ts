import { BuildCost } from "./build-cost";
import { Recipe } from "./recipe";
import { BuildableItem } from "./buildable-item";

export class ResourceItem extends BuildableItem {

    public code:string;
    public name:string;
    public icon:string;
    public handCrafted:boolean;
    public handCraftCost:BuildCost[];
    public craftDuration:number;
    public craftedWith:Recipe[];
    public category:string[];

    constructor(code: string, name: string, icon: string, handCrafted:boolean, 
        handCraftCost:BuildCost[], craftDuration:number, buildCost:BuildCost[], 
        craftedWith:Recipe[], category:string[]) {
        super(buildCost);
        this.code = code;
        this.name = name;
        this.icon = icon;
        this.handCrafted = handCrafted;
        this.handCraftCost = handCraftCost;
        this.craftDuration = craftDuration;
        this.craftedWith = craftedWith;
        this.category = category;
    }

}

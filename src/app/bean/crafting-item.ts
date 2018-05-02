import { ConsOrProd } from "./cons-or-prod";
import { Consumption } from "./consumption";
import { BuildCost } from "./build-cost";
import { Game } from "./game";
import { BuildableItem } from "./buildable-item";
import { ResearchItem } from "./research-item";

export class CraftingItem extends BuildableItem {

    public code:string;
    public name:string;
    public icon:string;
    public consumme:Consumption[];
    public category:string;

    constructor(code:string, name:string, icon: string, consumme:Consumption[], 
        buildCost:BuildCost[], category:string, unlockedBy:ResearchItem = null) {
        super(buildCost, unlockedBy)
        this.code = code;
        this.name = name;
        this.icon = icon;
        this.consumme = consumme;
        this.category = category;
    }
    
}

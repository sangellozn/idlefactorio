import { ConsOrProd } from "./cons-or-prod";
import { Consumption } from "./consumption";
import { Production } from "./production";
import { BuildCost } from "./build-cost";
import { Game } from "./game";
import { BuildableItem } from "./buildable-item";

export class CraftingItem extends BuildableItem {

    public id:number;
    public code:string;
    public name:string;
    public icon:string;
    public consumme:Consumption[];

    constructor(id: number, code:string, name:string, icon: string, consumme:Consumption[], buildCost:BuildCost[]) {
        super(buildCost)
        this.id = id;
        this.code = code;
        this.name = name;
        this.icon = icon;
        this.consumme = consumme;
    }
    
}

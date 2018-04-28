import { ConsOrProd } from "./cons-or-prod";
import { Consumption } from "./consumption";
import { Production } from "./production";
import { BuildCost } from "./build-cost";
import { Game } from "./game";

export class CraftingItem {

    public id:number;
    public code:string;
    public name:string;
    public icon:string;
    public consumme:Consumption[];
    public produce:Production[];
    public displayOrder:number;
    public categorie:string;
    public buildCost:BuildCost[];

    constructor(id: number, code:string, name:string, icon: string, consumme:Consumption[], 
        produce:Production[], displayOrder:number, categorie:string, buildCost:BuildCost[]) {
        this.id = id;
        this.code = code;
        this.name = name;
        this.icon = icon;
        this.consumme = consumme;
        this.produce = produce;
        this.displayOrder = displayOrder;
        this.categorie = categorie;
        this.buildCost = buildCost;
    }

    public canBuild() {
        return Game.getInstance().canBuild(this);
    }
}

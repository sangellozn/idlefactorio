import { ResourceItem } from "./resource-item";
import { Recipe } from "./recipe";

export class ProductionQty {

    /** Number of the crafter recipe the player built. */
    public nbBuild:number;
    /** The recipe */
    public recipe:Recipe;

    public constructor(nbBuild:number, recipe:Recipe) {
        this.nbBuild = nbBuild;
        this.recipe = recipe;
    }

    public increment():void {
        this.nbBuild++;
    }

    public decrement():void {
        this.nbBuild--;
    }
}

/** Upper class for production information, contains for a resource, the actual number of crafter build for each recipe. */
export class ProductionInfo {

    public resource:ResourceItem;
    public productionQtys:ProductionQty[];

    public constructor(resource:ResourceItem, productionQtys:ProductionQty[]) {
        this.resource = resource;
        this.productionQtys = productionQtys;
    }

}

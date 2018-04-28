import { ConsOrProd } from "./cons-or-prod";
import { ResourceItem } from "./resource-item";

export class Production extends ConsOrProd {

    constructor(qty:number, resources:ResourceItem[]) {
        super(false, qty, resources);
    }

}

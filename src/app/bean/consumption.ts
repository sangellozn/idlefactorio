import { ConsOrProd } from "./cons-or-prod";
import { ResourceItem } from "./resource-item";

export class Consumption extends ConsOrProd {

    constructor(qty:number, resource:ResourceItem) {
        super(true, qty, resource);
    }
}

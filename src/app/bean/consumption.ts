import { ConsOrProd } from "./cons-or-prod";
import { ResourceItem } from "./resource-item";

export class Consumption extends ConsOrProd {

    constructor(qty:number, resources:ResourceItem[]) {
        super(true, qty, resources);
    }
}

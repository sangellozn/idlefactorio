import { ResourceItem } from "./resource-item";
import { componentFactoryName } from "@angular/compiler";

/**
 * Consumption or production per second.
 */
export class ConsOrProd {

    /**
     * If the resource is consummed ?
     */
    public consumme:boolean;
    public qty:number;
    public resource:ResourceItem;

    constructor(consumme:boolean, qty: number, resource:ResourceItem) {
        this.consumme = consumme;
        this.qty = qty;
        this.resource = resource;
    }

}

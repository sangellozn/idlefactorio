import { ResourceItem } from "./resource-item";

export class ResearchCost {

    public qty:number;
    public resource:ResourceItem;

    public constructor(qty: number, resource:ResourceItem) {
        this.qty = qty;
        this.resource = resource;
    }
}

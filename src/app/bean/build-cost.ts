import { ResourceItem } from "./resource-item";

export class BuildCost {

    public resource:ResourceItem;
    public qty:number;

    public constructor(resource:ResourceItem, qty:number) {
        this.resource = resource;
        this.qty = qty;
    }

}

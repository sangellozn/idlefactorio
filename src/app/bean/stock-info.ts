import { ResourceItem } from "./resource-item";

export class StockInfo {

    constructor(
        public resource:ResourceItem, 
        public stock:number = 0, 
        public producing:number = 0, 
        public consuming:number = 0
    ) { }

    public increaseStock(qty: number): void {
        this.stock += Math.abs(qty);
    }

    public decreaseStock(qty: number): void {
        this.stock += Math.abs(qty) * -1;
    }

    public increaseProduction(qty:number): void {
        this.modify(true, Math.abs(qty));
    }

    public decreaseProduction(qty:number): void {
        this.modify(true, Math.abs(qty) * -1);
    }

    public increaseConsumption(qty:number): void {
        this.modify(false, Math.abs(qty));
    }

    public decreaseConsumption(qty:number): void {
        this.modify(false, Math.abs(qty) * -1);
    }

    private modify(prodOrCons:boolean, qty:number): void {
        if (prodOrCons) {
            this.producing += qty;
        } else {
            this.consuming += qty;
        }
    }

    public toObject():object {
        return {
            codeResource: this.resource.code,
            stock: this.stock,
            producing: this.producing,
            consuming: this.consuming
        }
    }

    public computeStockValue() {
        this.stock += (this.producing - this.consuming);
    }

}

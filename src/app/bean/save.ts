import { StockInfo } from "./stock-info";

export class Save {

    public stocks:object;
    public createdAt:Date;

    public constructor(stocks:Map<string, StockInfo>) {
        this.stocks = Array.from(stocks.values()).reduce((acc:object, item:StockInfo) => {acc[item.resource.code] = item.toObject(); return acc}, {});
        this.createdAt = new Date();
    }

    public toString():string {
        return JSON.stringify(this);
    }

}

import { StockInfo } from "./stock-info";
import { Game } from "./game";

export class Save {

    public stocks:object;
    public productionInfos:object;
    public createdAt:Date;
    public version:number = 1;

    public constructor(game:Game) {
        this.stocks = game.getStockInfos().reduce((acc, stockInfo) => {
            acc[stockInfo.resource.code] = {
                stock: stockInfo.stock,
                consuming: stockInfo.consuming,
                producing: stockInfo.producing
            }
            return acc;
        }, {});

        this.productionInfos = game.getCraftingItems().concat(game.getExtractingItems()).concat(game.getSmeltingItems()).reduce((acc, productionInfos) => {
            acc[productionInfos.resource.code] = [];
            productionInfos.productionQtys.map((pqty) => {
                acc[productionInfos.resource.code].push({code: pqty.craftingInfo.craftingItem.code, nb: pqty.nb});
            });
            return acc;
        }, {});

        this.createdAt = new Date();
    }

    public toString():string {
        return JSON.stringify(this);
    }

}

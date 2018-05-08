import { StockInfo } from "./stock-info";
import { Game } from "./game";

export class Save {

    public stocks:object;
    public productionInfos:object;
    public createdAt:Date;
    public version:number = 1;
    public searchProgress:object;

    public constructor(game:Game) {
        this.stocks = game.getStockInfos().reduce((acc, stockInfo) => {
            acc[stockInfo.resource.code] = {
                stock: stockInfo.stock,
                consuming: stockInfo.consuming,
                producing: stockInfo.producing
            }
            return acc;
        }, {});

        this.productionInfos = [game.getElectricityItem()]
            .concat(game.getCraftingItems())
            .concat(game.getExtractingItems())
            .concat(game.getSmeltingItems())
            .reduce((acc, productionInfos) => {
                acc[productionInfos.resource.code] = [];
                productionInfos.productionQtys.map((pqty) => {
                    acc[productionInfos.resource.code].push({code: pqty.recipe.craftingItem.code, nbBuild: pqty.nbBuild});
                });
                return acc;
            }, {}
        );

        this.searchProgress = game.getResearchItems().reduce((acc, research) => {
            acc[research.code] = {
                unlocked: research.isUnlocked,
                searchPro: research.searchProgression,
                searching: research.searching
            }

            return acc;
        }, {});

        this.createdAt = new Date();
    }

    public toString():string {
        return JSON.stringify(this);
    }

}

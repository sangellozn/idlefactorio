import { BuildCost } from "./build-cost";

export class BuildableItem {

    public buildCost:BuildCost[];

    public constructor(buildCost:BuildCost[]) {
        this.buildCost = buildCost;
    }
}

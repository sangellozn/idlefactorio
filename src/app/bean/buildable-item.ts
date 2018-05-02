import { BuildCost } from "./build-cost";
import { ResearchItem } from "./research-item";

export class BuildableItem {

    public buildCost:BuildCost[];
    public unlockedBy:ResearchItem;

    public constructor(buildCost:BuildCost[], unlockdBy:ResearchItem = null) {
        this.buildCost = buildCost;
        this.unlockedBy = unlockdBy;
    }
}

import { BuildCost } from "./build-cost";
import { ResearchItem } from "./research-item";

export class BuildableItem {

    public constructor(
        public buildCost:BuildCost[], 
        public unlockedBy:ResearchItem = null
    ) {  }
}

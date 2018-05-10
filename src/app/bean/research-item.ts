import { ResourceItem } from "./resource-item";
import { ResearchCost } from "./research-cost";
import { BuildableItem } from "./buildable-item";
import { Game } from "./game";

export class ResearchItem {

    public searchProgression:number;
    public searching:boolean;

    public constructor(
        public code:string, 
        public name:string, 
        public icon:string, 
        public isUnlocked:boolean, 
        public cost:ResearchCost[], 
        public baseDuration:number, 
        public dependsOn:ResearchItem[] = [], 
        public unlocks:ResearchItem[] = [], 
        public unlocksBuild:BuildableItem[] = []) {
        this.searchProgression = 0;
        this.searching = false;
    }

    get duration():number {
        return this.baseDuration * (1 - (Game.getInstance().getLabBonusValue() / 100));
    }

}

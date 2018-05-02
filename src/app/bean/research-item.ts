import { ResourceItem } from "./resource-item";
import { ResearchCost } from "./research-cost";
import { BuildableItem } from "./buildable-item";

export class ResearchItem {

    public code:string;
    public name:string;
    public icon:string;
    public isUnlocked:boolean;
    public cost:ResearchCost[];
    public duration:number;
    public searchProgression:number;
    public searching:boolean;
    public dependsOn:ResearchItem[];
    public unlocks:ResearchItem[];
    public unlocksBuild:BuildableItem[];

    public constructor(code:string, name:string, icon:string, isUnlocked:boolean, cost:ResearchCost[], 
        duration:number, dependsOn:ResearchItem[] = [], unlocks:ResearchItem[] = [], unlocksBuild:BuildableItem[] = []) {
        this.code = code;
        this.name = name;
        this.icon = icon;
        this.isUnlocked = isUnlocked;
        this.cost = cost;
        this.duration = duration;
        this.dependsOn = dependsOn;
        this.unlocks = unlocks;
        this.unlocksBuild = unlocksBuild;
        this.searchProgression = 0;
        this.searching = false;
    }

}


export class ResourceItem {

    public id:number;
    public code:string;
    public name:string;
    public icon:string;
    public displayOrder:number;
    public canBeMined:boolean;
    public mineDuration:number;

    constructor(id: number, code: string, name: string, icon: string, displayOrder:number, canBeMined:boolean, mineDuration:number) {
        this.id = id;
        this.code = code;
        this.name = name;
        this.icon = icon;
        this.displayOrder = displayOrder;
        this.canBeMined = canBeMined;
        this.mineDuration = mineDuration;
    }

}

import { CraftingItem } from "./crafting-item";
import { ResourceItem } from "./resource-item";
import { Consumption } from "./consumption";
import { Production } from "./production";
import { ResourceData } from "./resource-data";
import { BuildCost } from "./build-cost";

export class CraftingData {

    public static craftings:CraftingItem[] = [
        new CraftingItem(1, 'BMDCOA', 'Burner mining drill (coal)', 'assets/icons/burner-mining-drill.png', 
            [new Consumption(0.04, [ResourceData.resourcesByCode.get('COAL')])], 
            [new Production(0.28, [ResourceData.resourcesByCode.get('COAL')])], 1, 'COAL',
            [new BuildCost(ResourceData.resourcesByCode.get('STO'), 5), new BuildCost(ResourceData.resourcesByCode.get('IROPL'), 9)]),
        new CraftingItem(1, 'EMDCOA', 'Electric mining drill (coal)', 'assets/icons/electric-mining-drill.png', 
            [new Consumption(90, [ResourceData.resourcesByCode.get('ELEC')])], 
            [new Production(0.525, [ResourceData.resourcesByCode.get('COAL')])], 1, 'COAL',
            []),
        new CraftingItem(2, 'BMDIRO', 'Burner mining drill (iron)', 'assets/icons/burner-mining-drill.png', 
            [new Consumption(0.04, [ResourceData.resourcesByCode.get('COAL')])], 
            [new Production(0.28, [ResourceData.resourcesByCode.get('IRONO')])], 2, 'IRONO',
            [new BuildCost(ResourceData.resourcesByCode.get('STO'), 5), new BuildCost(ResourceData.resourcesByCode.get('IROPL'), 9)]),
        new CraftingItem(1, 'EMDIRO', 'Electric mining drill (iron)', 'assets/icons/electric-mining-drill.png', 
            [new Consumption(90, [ResourceData.resourcesByCode.get('ELEC')])], 
            [new Production(0.525, [ResourceData.resourcesByCode.get('IRONO')])], 1, 'IRONO',
            []),
        new CraftingItem(3, 'BMDCOP', 'Burner mining drill (copper)', 'assets/icons/burner-mining-drill.png', 
            [new Consumption(0.04, [ResourceData.resourcesByCode.get('COAL')])], 
            [new Production(0.28, [ResourceData.resourcesByCode.get('COPO')])], 3, 'COPO',
            [new BuildCost(ResourceData.resourcesByCode.get('STO'), 5), new BuildCost(ResourceData.resourcesByCode.get('IROPL'), 9)]),
        new CraftingItem(1, 'EMDCOP', 'Electric mining drill (copper)', 'assets/icons/electric-mining-drill.png', 
            [new Consumption(90, [ResourceData.resourcesByCode.get('ELEC')])], 
            [new Production(0.525, [ResourceData.resourcesByCode.get('COPO')])], 1, 'COPO',
            []),
        new CraftingItem(4, 'BMDSTO', 'Burner mining drill (stone)', 'assets/icons/burner-mining-drill.png', 
            [new Consumption(0.04, [ResourceData.resourcesByCode.get('COAL')])], 
            [new Production(0.3675, [ResourceData.resourcesByCode.get('STO')])], 4, 'STO',
            [new BuildCost(ResourceData.resourcesByCode.get('STO'), 5), new BuildCost(ResourceData.resourcesByCode.get('IROPL'), 9)]),
        new CraftingItem(4, 'EMDSTO', 'Electric mining drill (stone)', 'assets/icons/electric-mining-drill.png', 
            [new Consumption(90, [ResourceData.resourcesByCode.get('ELEC')])], 
            [new Production(0.3675, [ResourceData.resourcesByCode.get('STO')])], 4, 'STO',
            [])
    ];

    public static craftingsByCode:Map<string, CraftingItem> = new Map(CraftingData.craftings.map((crafting) : [string, CraftingItem] => [crafting.code, crafting]));

    public static craftingsExtractorCodes:string[] = ['BMDCOA', 'EMDCOA', 'BMDIRO', 'EMDIRO', 'BMDCOP', 'EMDCOP', 'BMDSTO', 'EMDSTO'];

}

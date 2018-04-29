import { CraftingItem } from "./crafting-item";
import { ResourceItem } from "./resource-item";
import { Consumption } from "./consumption";
import { Production } from "./production";
import { BuildCost } from "./build-cost";
import { CraftingInfo } from "./crafting-info";

export class GameData {

    public static resources:ResourceItem[];

    public static resourcesByCode:Map<string, ResourceItem>;

    public static craftings:CraftingItem[];

    public static craftingsByCode:Map<string, CraftingItem>;

    public static initGameData(): void {
        GameData.initResourceDef();
        GameData.initCraftingDef();
        GameData.initResourceCost();
        GameData.initCraftingCost();
    }

    public static initResourceDef(): void {
        GameData.resources = [
            new ResourceItem(1, 'ELEC', 'Electricity', 'assets/icons/electricity-icon-red.png', false, 0, [], [], "VARIOUS"),
            new ResourceItem(2, 'COAL', 'Coal', 'assets/icons/resources/coal.png',true, 1.25, [], [], "MINABLE"),
            new ResourceItem(3, 'IRONO','Iron Ore', 'assets/icons/resources/iron-ore.png', true, 1.25, [], [], "MINABLE"),
            new ResourceItem(4, 'COPO', 'Copper Ore', 'assets/icons/resources/copper-ore.png', true, 1.25, [], [], "MINABLE"),
            new ResourceItem(5, 'STO', 'Stone', 'assets/icons/resources/stone.png', true, 1, [], [], "MINABLE"),
            new ResourceItem(6, 'IROPL', 'Iron plate', 'assets/icons/iron-plate.png', false, 0, [], [], "SMELTABLE"),
            new ResourceItem(7, 'COPPL', 'Copper plate', 'assets/icons/copper-plate.png', false, 0, [], [], "SMELTABLE"),
            new ResourceItem(8, 'STEPL', 'Steel plate', 'assets/icons/steel-plate.png', false, 0, [], [], "SMELTABLE"),
            new ResourceItem(9, 'IGW', 'Iron gear wheel', 'assets/icons/iron-gear-wheel.png', true, 0.5, [], [], "CRAFTABLE"),
            new ResourceItem(10, 'CC', 'Copper cable', 'assets/icons/copper-cable.png', true, 0.25, [], [], "CRAFTABLE"),
            new ResourceItem(11, 'EC', 'Electronic circuit', 'assets/icons/electronic-circuit.png', true, 0.5, [], [], "CRAFTABLE"),
            new ResourceItem(12, 'STOFUR', 'Stone furnace', 'assets/icons/stone-furnace.png', true, 0.5, [], [], "CRAFTABLE"),
        ];

        GameData.resourcesByCode =  new Map(GameData.resources.map((resource) : [string, ResourceItem] => [resource.code, resource]));
    }

    public static initResourceCost(): void {
        GameData.resourcesByCode.get('COAL').craftedWith = [new CraftingInfo(0.28, GameData.craftingsByCode.get('BMD'), []), 
            new CraftingInfo(0.525, GameData.craftingsByCode.get('EMD'), [])];
        GameData.resourcesByCode.get('IRONO').craftedWith = [new CraftingInfo(0.28, GameData.craftingsByCode.get('BMD'), []), 
            new CraftingInfo(0.525, GameData.craftingsByCode.get('EMD'), [])];
        GameData.resourcesByCode.get('COPO').craftedWith = [new CraftingInfo(0.28, GameData.craftingsByCode.get('BMD'), []), 
            new CraftingInfo(0.525, GameData.craftingsByCode.get('EMD'), [])];
        GameData.resourcesByCode.get('STO').craftedWith = [new CraftingInfo(0.3675, GameData.craftingsByCode.get('BMD'), []), 
            new CraftingInfo(0.65, GameData.craftingsByCode.get('EMD'), [])];
        GameData.resourcesByCode.get('IROPL').craftedWith = [new CraftingInfo(0.28, GameData.craftingsByCode.get('STOFUR'), [new Consumption(0.28, GameData.resourcesByCode.get('IRONO'))]), 
            new CraftingInfo(0.57, GameData.craftingsByCode.get('STEFUR'), [new Consumption(0.57, GameData.resourcesByCode.get('IRONO'))]), 
            new CraftingInfo(0.57, GameData.craftingsByCode.get('ELECFUR'), [new Consumption(0.57, GameData.resourcesByCode.get('IRONO'))])];
        GameData.resourcesByCode.get('COPPL').craftedWith = [new CraftingInfo(0.28, GameData.craftingsByCode.get('STOFUR'), [new Consumption(0.28, GameData.resourcesByCode.get('COPO'))]), 
            new CraftingInfo(0.57, GameData.craftingsByCode.get('STEFUR'), [new Consumption(0.28, GameData.resourcesByCode.get('COPO'))]), 
            new CraftingInfo(0.57, GameData.craftingsByCode.get('ELECFUR'), [new Consumption(0.57, GameData.resourcesByCode.get('COPO'))])];
        GameData.resourcesByCode.get('STEPL').craftedWith = [new CraftingInfo(0.057, GameData.craftingsByCode.get('STOFUR'), [new Consumption(0.285, GameData.resourcesByCode.get('IROPL'))]), 
            new CraftingInfo(0.114, GameData.craftingsByCode.get('STEFUR'), [new Consumption(0.285, GameData.resourcesByCode.get('IROPL'))]), 
            new CraftingInfo(0.114, GameData.craftingsByCode.get('ELECFUR'), [new Consumption(0.57, GameData.resourcesByCode.get('IROPL'))])];
        GameData.resourcesByCode.get('IGW').craftedWith = [new CraftingInfo(1, GameData.craftingsByCode.get('ASSM1'), [new Consumption(2, GameData.resourcesByCode.get('IROPL'))]), 
            new CraftingInfo(1.5, GameData.craftingsByCode.get('ASSM2'), [new Consumption(3, GameData.resourcesByCode.get('IROPL'))]), 
            new CraftingInfo(2.5, GameData.craftingsByCode.get('ASSM3'), [new Consumption(5, GameData.resourcesByCode.get('IROPL'))])];
        GameData.resourcesByCode.get('CC').craftedWith = [new CraftingInfo(2, GameData.craftingsByCode.get('ASSM1'), [new Consumption(1, GameData.resourcesByCode.get('COPPL'))]), 
            new CraftingInfo(3, GameData.craftingsByCode.get('ASSM2'), [new Consumption(1.5, GameData.resourcesByCode.get('COPPL'))]), 
            new CraftingInfo(5, GameData.craftingsByCode.get('ASSM3'), [new Consumption(2.5, GameData.resourcesByCode.get('COPPL'))])];
        GameData.resourcesByCode.get('EC').craftedWith = [new CraftingInfo(1, GameData.craftingsByCode.get('ASSM1')
                , [new Consumption(3, GameData.resourcesByCode.get('CC')), new Consumption(1, GameData.resourcesByCode.get('IROPL'))]), 
            new CraftingInfo(1.5, GameData.craftingsByCode.get('ASSM2')
                , [new Consumption(4.5, GameData.resourcesByCode.get('CC')), new Consumption(1.5, GameData.resourcesByCode.get('IROPL'))]), 
            new CraftingInfo(2.5, GameData.craftingsByCode.get('ASSM3')
                , [new Consumption(7.5, GameData.resourcesByCode.get('CC')), new Consumption(2.5, GameData.resourcesByCode.get('IROPL'))])];
        GameData.resourcesByCode.get('STOFUR').craftedWith = [new CraftingInfo(1, GameData.craftingsByCode.get('ASSM1'), [new Consumption(5, GameData.resourcesByCode.get('STO'))]), 
            new CraftingInfo(1.5, GameData.craftingsByCode.get('ASSM2'), [new Consumption(7.5, GameData.resourcesByCode.get('STO'))]), 
            new CraftingInfo(2.5, GameData.craftingsByCode.get('ASSM3'), [new Consumption(12.5, GameData.resourcesByCode.get('STO'))])];

        GameData.resourcesByCode.get('IROPL').buildCost = [new BuildCost(GameData.resourcesByCode.get('IRONO'), 1)];
        GameData.resourcesByCode.get('COPPL').buildCost = [new BuildCost(GameData.resourcesByCode.get('COPO'), 1)];
        GameData.resourcesByCode.get('STEPL').buildCost = [new BuildCost(GameData.resourcesByCode.get('IROPL'), 5)];
        GameData.resourcesByCode.get('IGW').buildCost = [new BuildCost(GameData.resourcesByCode.get('IROPL'), 2)];
        GameData.resourcesByCode.get('CC').buildCost = [new BuildCost(GameData.resourcesByCode.get('COPPL'), 0.5)];
        GameData.resourcesByCode.get('EC').buildCost = [new BuildCost(GameData.resourcesByCode.get('IROPL'), 1), new BuildCost(GameData.resourcesByCode.get('CC'), 3)];
        GameData.resourcesByCode.get('STOFUR').buildCost = [new BuildCost(GameData.resourcesByCode.get('STO'), 5)];
    }

    public static initCraftingDef(): void {
        GameData.craftings = [
            new CraftingItem(1, 'BMD', 'Burner mining drill', 'assets/icons/burner-mining-drill.png', [],
                [/*new BuildCost(GameData.resourcesByCode.get('STO'), 5), new BuildCost(GameData.resourcesByCode.get('IROPL'), 3)*/]), // FIXME Gear
            new CraftingItem(2, 'EMD', 'Electric mining drill', 'assets/icons/electric-mining-drill.png', [], 
                []), // FIXME
            new CraftingItem(3, 'STOFUR', 'Stone furnace', 'assets/icons/stone-furnace.png', [], 
                [/*new BuildCost(GameData.resourcesByCode.get('STO'), 5)*/]),
            new CraftingItem(4, 'STEFUR', 'Steel furnace', 'assets/icons/steel-furnace.png', [], 
                []), // FIXME
            new CraftingItem(5, 'ELECFUR', 'Electric furnace', 'assets/icons/electric-furnace.png', [],
                []), // FIXME
            new CraftingItem(6, 'ASSM1', 'Assembling machine 1', 'assets/icons/assembling-machine-1.png', [], 
                []), //FIXME
            new CraftingItem(7, 'ASSM2', 'Assembling machine 2', 'assets/icons/assembling-machine-2.png', [], 
                []), //FIXME
            new CraftingItem(8, 'ASSM3', 'Assembling machine 3', 'assets/icons/assembling-machine-3.png', [],
                []), //FIXME
        ];

        GameData.craftingsByCode = new Map(GameData.craftings.map((crafting) : [string, CraftingItem] => [crafting.code, crafting]));
    }

    public static initCraftingCost(): void {
        GameData.craftingsByCode.get('BMD').consumme = [new Consumption(0.04, GameData.resourcesByCode.get('COAL'))];
        GameData.craftingsByCode.get('EMD').consumme = [new Consumption(90, GameData.resourcesByCode.get('ELEC'))];
        GameData.craftingsByCode.get('STOFUR').consumme = [new Consumption(0.0025, GameData.resourcesByCode.get('COAL'))];
        GameData.craftingsByCode.get('STEFUR').consumme = [new Consumption(0.0025, GameData.resourcesByCode.get('COAL'))];
        GameData.craftingsByCode.get('ELECFUR').consumme = [new Consumption(180, GameData.resourcesByCode.get('ELEC'))];
        GameData.craftingsByCode.get('ASSM1').consumme = [new Consumption(90, GameData.resourcesByCode.get('ELEC'))];
        GameData.craftingsByCode.get('ASSM2').consumme = [new Consumption(150, GameData.resourcesByCode.get('ELEC'))];
        GameData.craftingsByCode.get('ASSM3').consumme = [new Consumption(210, GameData.resourcesByCode.get('ELEC'))];

        GameData.craftingsByCode.get('BMD').buildCost = [new BuildCost(GameData.resourcesByCode.get('IGW'), 3), 
            new BuildCost(GameData.resourcesByCode.get('IROPL'), 3), new BuildCost(GameData.resourcesByCode.get('STOFUR'), 1)];
        GameData.craftingsByCode.get('EMD').buildCost = [new BuildCost(GameData.resourcesByCode.get('EC'), 3), 
            new BuildCost(GameData.resourcesByCode.get('IGW'), 5), new BuildCost(GameData.resourcesByCode.get('IROPL'), 10)];
        GameData.craftingsByCode.get('STOFUR').buildCost = [new BuildCost(GameData.resourcesByCode.get('STO'), 5)];

        // FIXME
        /*GameData.craftingsByCode.get('STEFUR').buildCost = [new Consumption(0.0025, [GameData.resourcesByCode.get('COAL')])];
        GameData.craftingsByCode.get('ELECFUR').buildCost = [new Consumption(180, [GameData.resourcesByCode.get('ELEC')])];
        GameData.craftingsByCode.get('ASSM1').buildCost = [new Consumption(90, [GameData.resourcesByCode.get('ELEC')])];
        GameData.craftingsByCode.get('ASSM2').buildCost = [new Consumption(150, [GameData.resourcesByCode.get('ELEC')])];
        GameData.craftingsByCode.get('ASSM3').buildCost = [new Consumption(210, [GameData.resourcesByCode.get('ELEC')])];*/
    }


    

}

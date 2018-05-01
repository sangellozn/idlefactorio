import { CraftingItem } from "./crafting-item";
import { ResourceItem } from "./resource-item";
import { Consumption } from "./consumption";
import { BuildCost } from "./build-cost";
import { Recipe, ProductionValue } from "./recipe";

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
            new ResourceItem('ELEC', 'Electricity', 'assets/icons/electricity-icon-red.png', false, [], 0, [], [], ['ELEC', 'STOCKABLE']),
            new ResourceItem('WATER', 'Water', 'assets/icons/resources/water.png', false, [], 0, [], [], ["MINABLE", 'STOCKABLE']),
            new ResourceItem('COAL', 'Coal', 'assets/icons/resources/coal.png',true,  [],1.25, [], [], ["MINABLE", 'STOCKABLE']),
            new ResourceItem('IRONO','Iron Ore', 'assets/icons/resources/iron-ore.png', true, [], 1.25, [], [], ["MINABLE", 'STOCKABLE']),
            new ResourceItem('COPO', 'Copper Ore', 'assets/icons/resources/copper-ore.png', true, [], 1.25, [], [], ["MINABLE", 'STOCKABLE']),
            new ResourceItem('STO', 'Stone', 'assets/icons/resources/stone.png', true, [], 1, [], [], ["MINABLE", 'STOCKABLE']),
            new ResourceItem('STOFUR', 'Stone furnace', 'assets/icons/stone-furnace.png', true, [], 0.5, [], [], ["CRAFTABLE", 'STOCKABLE']),
            new ResourceItem('IROPL', 'Iron plate', 'assets/icons/iron-plate.png', true, [], 3.5, [], [], ["SMELTABLE", 'STOCKABLE']),
            new ResourceItem('COPPL', 'Copper plate', 'assets/icons/copper-plate.png', true, [], 3.5, [], [], ["SMELTABLE", 'STOCKABLE']),
            new ResourceItem('STEPL', 'Steel plate', 'assets/icons/steel-plate.png', true, [], 17.5, [], [], ["SMELTABLE", 'STOCKABLE']),
            new ResourceItem('STOBR', 'Stone brick', 'assets/icons/stone-brick.png', true, [], 3.5, [], [], ["SMELTABLE", 'STOCKABLE']),
            new ResourceItem('IGW', 'Iron gear wheel', 'assets/icons/iron-gear-wheel.png', true, [], 0.5, [], [], ["CRAFTABLE", 'STOCKABLE']),
            new ResourceItem('CC', 'Copper cable', 'assets/icons/copper-cable.png', true, [], 0.25, [], [], ["CRAFTABLE", 'STOCKABLE']),
            new ResourceItem('EC', 'Electronic circuit', 'assets/icons/electronic-circuit.png', true, [], 0.5, [], [], ["CRAFTABLE", 'STOCKABLE']),
            new ResourceItem('PIPE', 'Pipe', 'assets/icons/pipe.png', true, [], 0.5, [], [], ["CRAFTABLE", 'STOCKABLE']),
            new ResourceItem('ASSM1', 'Assembling machine 1', 'assets/icons/assembling-machine-1.png', true, [], 0.5, [], [], ['CRAFTABLE', 'STOCKABLE']),
            new ResourceItem('ASSM2', 'Assembling machine 2', 'assets/icons/assembling-machine-2.png', true, [], 0.5, [], [], ['CRAFTABLE', 'STOCKABLE']),
            new ResourceItem('ASSM3', 'Assembling machine 3', 'assets/icons/assembling-machine-3.png', true, [], 0.5, [], [], ['CRAFTABLE', 'STOCKABLE']),
            new ResourceItem('ADVC', 'Advanced circuit', 'assets/icons/advanced-circuit.png', true, [], 6, [], [], ['CRAFTABLE', 'STOCKABLE']),
            new ResourceItem('SOLPAN', 'Solar panel', 'assets/icons/solar-panel.png', true, [], 10, [], [], ['CRAFTABLE', 'STOCKABLE']),
            new ResourceItem('SM1', 'Speed module 1', 'assets/icons/speed-module.png', true, [], 15, [], [], ['CRAFTABLE', 'STOCKABLE']),
            //new ResourceItem('SM2', 'Speed module 2', 'assets/icons/speed-module-2.png', true, [], 10, [], [], ['CRAFTABLE', 'STOCKABLE']),
            //new ResourceItem('SM3', 'Speed module 3', 'assets/icons/speed-module-3.png', true, [], 10, [], [], ['CRAFTABLE', 'STOCKABLE']),
            new ResourceItem('BOILPROC', 'Basic oil processing', 'assets/icons/basic-oil-processing.png', false, [], 0, [], [], ["SMELTABLE"]),
            new ResourceItem('ADVOILPROC', 'Advanced oil processing', 'assets/icons/advanced-oil-processing.png', false, [], 0, [], [], ["SMELTABLE"]),
            new ResourceItem('HOILCRACK', 'Heavy oil cracking', 'assets/icons/heavy-oil-cracking.png', false, [], 0, [], [], ["SMELTABLE"]),
            new ResourceItem('LOILCRACK', 'Light oil cracking', 'assets/icons/light-oil-cracking.png', false, [], 0, [], [], ["SMELTABLE"]),
            new ResourceItem('SOLFUHO', 'Solid fuel (from heavy oil)', 'assets/icons/solid-fuel-from-heavy-oil.png', false, [], 0, [], [], ["SMELTABLE"]),
            new ResourceItem('SOLFULO', 'Solid fuel (from light oil)', 'assets/icons/solid-fuel-from-light-oil.png', false, [], 0, [], [], ["SMELTABLE"]),
            new ResourceItem('SOLFUPG', 'Solid fuel (from petroleum gas)', 'assets/icons/solid-fuel-from-petroleum-gas.png', false, [], 0, [], [], ["SMELTABLE"]),
            new ResourceItem('CRUDO', 'Crude oil', 'assets/icons/resources/crude-oil.png', false, [], 0, [], [], ["MINABLE", 'STOCKABLE']),
            new ResourceItem('HOIL', 'Heavy oil', 'assets/icons/heavy-oil.png', false, [], 0, [], [], ['STOCKABLE']),
            new ResourceItem('LOIL', 'Light oil', 'assets/icons/light-oil.png', false, [], 0, [], [], ['STOCKABLE']),
            new ResourceItem('PGAS', 'Petroleum gas', 'assets/icons/petroleum-gas.png', false, [], 0, [], [], ['STOCKABLE']),
            new ResourceItem('LUB', 'Lubricant', 'assets/icons/lubricant.png', false, [], 0, [], [], ['SMELTABLE', 'STOCKABLE']),
            new ResourceItem('SULF', 'Sulfur', 'assets/icons/sulfur.png', false, [], 0, [], [], ['SMELTABLE', 'STOCKABLE']),
            new ResourceItem('SULFAC', 'Sulfuric acid', 'assets/icons/sulfuric-acid.png', false, [], 0, [], [], ['SMELTABLE', 'STOCKABLE']),
            new ResourceItem('PLASBAR', 'Plastic bar', 'assets/icons/plastic-bar.png', true, [], 1, [], [], ['CRAFTABLE', 'STOCKABLE']),
            new ResourceItem('SOLFUEL', 'Solid fuel', 'assets/icons/solid-fuel.png', false, [], 0, [], [], ['STOCKABLE']),
            new ResourceItem('ROCFUEL', 'Rocket fuel', 'assets/icons/rocket-fuel.png', true, [], 30, [], [], ['CRAFTABLE', 'STOCKABLE']),
        ];

        GameData.resourcesByCode =  new Map(GameData.resources.map((resource) : [string, ResourceItem] => [resource.code, resource]));
    }

    public static initResourceCost(): void {

        // Crafters definition.
        GameData.resourcesByCode.get('ELEC').craftedWith = [
            new Recipe([new ProductionValue(900, GameData.resourcesByCode.get('ELEC'))], GameData.craftingsByCode.get('STEAMENG'), []),
            new Recipe([new ProductionValue(42, GameData.resourcesByCode.get('ELEC'))], GameData.craftingsByCode.get('SOLPAN'), []),
        ];
        GameData.resourcesByCode.get('WATER').craftedWith = [
            new Recipe([new ProductionValue(120, GameData.resourcesByCode.get('WATER'))], GameData.craftingsByCode.get('OFFPUMP'), [])
        ];
        GameData.resourcesByCode.get('COAL').craftedWith = [
            new Recipe([new ProductionValue(0.28, GameData.resourcesByCode.get('COAL'))], GameData.craftingsByCode.get('BMD'), []), 
            new Recipe([new ProductionValue(0.86, GameData.resourcesByCode.get('COAL'))], GameData.craftingsByCode.get('EMD'), [])
        ];
        GameData.resourcesByCode.get('IRONO').craftedWith = [
            new Recipe([new ProductionValue(0.28, GameData.resourcesByCode.get('IRONO'))], GameData.craftingsByCode.get('BMD'), []), 
            new Recipe([new ProductionValue(0.86, GameData.resourcesByCode.get('IRONO'))], GameData.craftingsByCode.get('EMD'), [])
        ];
        GameData.resourcesByCode.get('COPO').craftedWith = [
            new Recipe([new ProductionValue(0.28, GameData.resourcesByCode.get('COPO'))], GameData.craftingsByCode.get('BMD'), []), 
            new Recipe([new ProductionValue(0.86, GameData.resourcesByCode.get('COPO'))], GameData.craftingsByCode.get('EMD'), [])
        ];
        GameData.resourcesByCode.get('STO').craftedWith = [
            new Recipe([new ProductionValue(0.3675, GameData.resourcesByCode.get('STO'))], GameData.craftingsByCode.get('BMD'), []), 
            new Recipe([new ProductionValue(1.12, GameData.resourcesByCode.get('STO'))], GameData.craftingsByCode.get('EMD'), [])
        ];
        GameData.resourcesByCode.get('CRUDO').craftedWith = [
            new Recipe([new ProductionValue(0.2, GameData.resourcesByCode.get('CRUDO'))], GameData.craftingsByCode.get('PUMPJ'), [])
        ];
        GameData.resourcesByCode.get('IROPL').craftedWith = [
            new Recipe([new ProductionValue(0.28, GameData.resourcesByCode.get('IROPL'))], GameData.craftingsByCode.get('STOFUR'), [
                new Consumption(0.28, GameData.resourcesByCode.get('IRONO'))
            ]), 
            new Recipe([new ProductionValue(0.57, GameData.resourcesByCode.get('IROPL'))], GameData.craftingsByCode.get('STEFUR'), [
                new Consumption(0.57, GameData.resourcesByCode.get('IRONO'))
            ]), 
            new Recipe([new ProductionValue(0.57, GameData.resourcesByCode.get('IROPL'))], GameData.craftingsByCode.get('ELECFUR'), [
                new Consumption(0.57, GameData.resourcesByCode.get('IRONO'))
            ])
        ];
        GameData.resourcesByCode.get('COPPL').craftedWith = [
            new Recipe([new ProductionValue(0.28, GameData.resourcesByCode.get('COPPL'))], GameData.craftingsByCode.get('STOFUR'), [
                new Consumption(0.28, GameData.resourcesByCode.get('COPO'))
            ]), 
            new Recipe([new ProductionValue(0.57, GameData.resourcesByCode.get('COPPL'))], GameData.craftingsByCode.get('STEFUR'), [
                new Consumption(0.57, GameData.resourcesByCode.get('COPO'))
            ]), 
            new Recipe([new ProductionValue(0.57, GameData.resourcesByCode.get('COPPL'))], GameData.craftingsByCode.get('ELECFUR'), [
                new Consumption(0.57, GameData.resourcesByCode.get('COPO'))
            ])
        ];
        GameData.resourcesByCode.get('STEPL').craftedWith = [
            new Recipe([new ProductionValue(0.057, GameData.resourcesByCode.get('STEPL'))], GameData.craftingsByCode.get('STOFUR'), [
                new Consumption(0.285, GameData.resourcesByCode.get('IROPL'))
            ]), 
            new Recipe([new ProductionValue(0.114, GameData.resourcesByCode.get('STEPL'))], GameData.craftingsByCode.get('STEFUR'), [
                new Consumption(0.57, GameData.resourcesByCode.get('IROPL'))
            ]), 
            new Recipe([new ProductionValue(0.114, GameData.resourcesByCode.get('STEPL'))], GameData.craftingsByCode.get('ELECFUR'), [
                new Consumption(0.57, GameData.resourcesByCode.get('IROPL'))
            ])
        ];
        GameData.resourcesByCode.get('IGW').craftedWith = [
            new Recipe([new ProductionValue(1, GameData.resourcesByCode.get('IGW'))], GameData.craftingsByCode.get('ASSM1'), [
                new Consumption(2, GameData.resourcesByCode.get('IROPL'))
            ]), 
            new Recipe([new ProductionValue(1.5, GameData.resourcesByCode.get('IGW'))], GameData.craftingsByCode.get('ASSM2'), [
                new Consumption(3, GameData.resourcesByCode.get('IROPL'))
            ]), 
            new Recipe([new ProductionValue(2.5, GameData.resourcesByCode.get('IGW'))], GameData.craftingsByCode.get('ASSM3'), [
                new Consumption(5, GameData.resourcesByCode.get('IROPL'))
            ])
        ];
        GameData.resourcesByCode.get('CC').craftedWith = [
            new Recipe([new ProductionValue(2, GameData.resourcesByCode.get('CC'))], GameData.craftingsByCode.get('ASSM1'), [
                new Consumption(1, GameData.resourcesByCode.get('COPPL'))
            ]), 
            new Recipe([new ProductionValue(3, GameData.resourcesByCode.get('CC'))], GameData.craftingsByCode.get('ASSM2'), [
                new Consumption(1.5, GameData.resourcesByCode.get('COPPL'))
            ]), 
            new Recipe([new ProductionValue(5, GameData.resourcesByCode.get('CC'))], GameData.craftingsByCode.get('ASSM3'), [
                new Consumption(2.5, GameData.resourcesByCode.get('COPPL'))
            ])
        ];
        GameData.resourcesByCode.get('EC').craftedWith = [
            new Recipe([new ProductionValue(1, GameData.resourcesByCode.get('EC'))], GameData.craftingsByCode.get('ASSM1')
                , [new Consumption(3, GameData.resourcesByCode.get('CC')), new Consumption(1, GameData.resourcesByCode.get('IROPL'))]), 
            new Recipe([new ProductionValue(1.5, GameData.resourcesByCode.get('EC'))], GameData.craftingsByCode.get('ASSM2')
                , [new Consumption(4.5, GameData.resourcesByCode.get('CC')), new Consumption(1.5, GameData.resourcesByCode.get('IROPL'))]), 
            new Recipe([new ProductionValue(2.5, GameData.resourcesByCode.get('EC'))], GameData.craftingsByCode.get('ASSM3')
                , [new Consumption(7.5, GameData.resourcesByCode.get('CC')), new Consumption(2.5, GameData.resourcesByCode.get('IROPL'))])
        ];
        GameData.resourcesByCode.get('STOFUR').craftedWith = [
            new Recipe([new ProductionValue(1, GameData.resourcesByCode.get('STOFUR'))], GameData.craftingsByCode.get('ASSM1'), [
                new Consumption(5, GameData.resourcesByCode.get('STO'))]), 
            new Recipe([new ProductionValue(1.5, GameData.resourcesByCode.get('STOFUR'))], GameData.craftingsByCode.get('ASSM2'), [
                new Consumption(7.5, GameData.resourcesByCode.get('STO'))]), 
            new Recipe([new ProductionValue(2.5, GameData.resourcesByCode.get('STOFUR'))], GameData.craftingsByCode.get('ASSM3'), [
                new Consumption(12.5, GameData.resourcesByCode.get('STO'))])
        ];
        GameData.resourcesByCode.get('PIPE').craftedWith = [
            new Recipe([new ProductionValue(1, GameData.resourcesByCode.get('PIPE'))], GameData.craftingsByCode.get('ASSM1'), [
                new Consumption(1, GameData.resourcesByCode.get('IROPL'))]), 
            new Recipe([new ProductionValue(1.5, GameData.resourcesByCode.get('PIPE'))], GameData.craftingsByCode.get('ASSM2'), [
                new Consumption(1.5, GameData.resourcesByCode.get('IROPL'))]), 
            new Recipe([new ProductionValue(2.5, GameData.resourcesByCode.get('PIPE'))], GameData.craftingsByCode.get('ASSM3'), [
                new Consumption(2.5, GameData.resourcesByCode.get('IROPL'))])
        ];
        GameData.resourcesByCode.get('STOBR').craftedWith = [
            new Recipe([new ProductionValue(0.28, GameData.resourcesByCode.get('STOBR'))], GameData.craftingsByCode.get('STOFUR'), [
                new Consumption(0.285, GameData.resourcesByCode.get('STO'))]), 
            new Recipe([new ProductionValue(0.57, GameData.resourcesByCode.get('STOBR'))], GameData.craftingsByCode.get('STEFUR'), [
                new Consumption(0.57, GameData.resourcesByCode.get('STO'))]), 
            new Recipe([new ProductionValue(0.57, GameData.resourcesByCode.get('STOBR'))], GameData.craftingsByCode.get('ELECFUR'), [
                new Consumption(0.57, GameData.resourcesByCode.get('STO'))])
        ];
        GameData.resourcesByCode.get('BOILPROC').craftedWith = [
            new Recipe([
                    new ProductionValue(6, GameData.resourcesByCode.get('HOIL')),
                    new ProductionValue(6, GameData.resourcesByCode.get('LOIL')),
                    new ProductionValue(8, GameData.resourcesByCode.get('PGAS'))
                ], GameData.craftingsByCode.get('OILREF'), [new Consumption(20, GameData.resourcesByCode.get('CRUDO'))])
        ];
        GameData.resourcesByCode.get('ADVOILPROC').craftedWith = [
            new Recipe([
                    new ProductionValue(2, GameData.resourcesByCode.get('HOIL')),
                    new ProductionValue(9, GameData.resourcesByCode.get('LOIL')),
                    new ProductionValue(11, GameData.resourcesByCode.get('PGAS'))
                ], GameData.craftingsByCode.get('OILREF'), [new Consumption(20, GameData.resourcesByCode.get('CRUDO')), new Consumption(10, GameData.resourcesByCode.get('WATER'))])
        ];
        GameData.resourcesByCode.get('HOILCRACK').craftedWith = [
            new Recipe([
                    new ProductionValue(10, GameData.resourcesByCode.get('LOIL'))
                ], GameData.craftingsByCode.get('OILREF'), [new Consumption(13.5, GameData.resourcesByCode.get('HOIL')), new Consumption(10, GameData.resourcesByCode.get('WATER'))])
        ];
        GameData.resourcesByCode.get('LOILCRACK').craftedWith = [
            new Recipe([
                    new ProductionValue(6.5, GameData.resourcesByCode.get('PGAS'))
                ], GameData.craftingsByCode.get('OILREF'), [new Consumption(10, GameData.resourcesByCode.get('LOIL')), new Consumption(10, GameData.resourcesByCode.get('WATER'))])
        ];
        GameData.resourcesByCode.get('LUB').craftedWith = [
            new Recipe([
                    new ProductionValue(10, GameData.resourcesByCode.get('LUB'))
                ], GameData.craftingsByCode.get('CHEMPLANT'), [new Consumption(10, GameData.resourcesByCode.get('HOIL'))])
        ];
        GameData.resourcesByCode.get('SULF').craftedWith = [
            new Recipe([
                    new ProductionValue(2, GameData.resourcesByCode.get('SULF'))
                ], GameData.craftingsByCode.get('CHEMPLANT'), [new Consumption(30, GameData.resourcesByCode.get('PGAS')), new Consumption(30, GameData.resourcesByCode.get('WATER'))])
        ];
        GameData.resourcesByCode.get('SULFAC').craftedWith = [
            new Recipe([
                    new ProductionValue(50, GameData.resourcesByCode.get('SULFAC'))
                ], GameData.craftingsByCode.get('CHEMPLANT'), 
                [new Consumption(1, GameData.resourcesByCode.get('IROPL')), 
                    new Consumption(5, GameData.resourcesByCode.get('SULF')),
                    new Consumption(100, GameData.resourcesByCode.get('WATER'))])
        ];
        GameData.resourcesByCode.get('PLASBAR').craftedWith = [
            new Recipe([
                    new ProductionValue(2, GameData.resourcesByCode.get('PLASBAR'))
                ], GameData.craftingsByCode.get('CHEMPLANT'), [new Consumption(1, GameData.resourcesByCode.get('COAL')), new Consumption(20, GameData.resourcesByCode.get('PGAS'))])
        ];
        GameData.resourcesByCode.get('ADVC').craftedWith = [
            new Recipe([new ProductionValue(0.125, GameData.resourcesByCode.get('ADVC'))], GameData.craftingsByCode.get('ASSM2'), [
                new Consumption(0.5, GameData.resourcesByCode.get('CC')),
                new Consumption(0.25, GameData.resourcesByCode.get('EC')),
                new Consumption(0.25, GameData.resourcesByCode.get('PLASBAR'))
            ]), 
            new Recipe([new ProductionValue(0.2, GameData.resourcesByCode.get('ADVC'))], GameData.craftingsByCode.get('ASSM3'), [
                new Consumption(0.85, GameData.resourcesByCode.get('CC')),
                new Consumption(0.425, GameData.resourcesByCode.get('EC')),
                new Consumption(0.425, GameData.resourcesByCode.get('PLASBAR'))
            ])
        ];
        GameData.resourcesByCode.get('ASSM1').craftedWith = [
            new Recipe([new ProductionValue(1, GameData.resourcesByCode.get('ASSM1'))], GameData.craftingsByCode.get('ASSM2'), [
                new Consumption(1.125, GameData.resourcesByCode.get('EC')),
                new Consumption(1.875, GameData.resourcesByCode.get('IGW')),
                new Consumption(3.375, GameData.resourcesByCode.get('IROPL'))
            ]), 
            new Recipe([new ProductionValue(1, GameData.resourcesByCode.get('ASSM1'))], GameData.craftingsByCode.get('ASSM3'), [
                new Consumption(1.875, GameData.resourcesByCode.get('EC')),
                new Consumption(3.125, GameData.resourcesByCode.get('IGW')),
                new Consumption(5.625, GameData.resourcesByCode.get('IROPL'))
            ])
        ];
        GameData.resourcesByCode.get('ASSM2').craftedWith = [
            new Recipe([new ProductionValue(1.5, GameData.resourcesByCode.get('ASSM2'))], GameData.craftingsByCode.get('ASSM2'), [
                new Consumption(1.5, GameData.resourcesByCode.get('ASSM1')),
                new Consumption(4.5, GameData.resourcesByCode.get('EC')),
                new Consumption(7.5, GameData.resourcesByCode.get('IGW')),
                new Consumption(6.75, GameData.resourcesByCode.get('IROPL'))
            ]), 
            new Recipe([new ProductionValue(2.5, GameData.resourcesByCode.get('ASSM2'))], GameData.craftingsByCode.get('ASSM3'), [
                new Consumption(2.5, GameData.resourcesByCode.get('ASSM1')),
                new Consumption(7.5, GameData.resourcesByCode.get('EC')),
                new Consumption(12.5, GameData.resourcesByCode.get('IGW')),
                new Consumption(11.25, GameData.resourcesByCode.get('IROPL'))
            ])
        ];
        GameData.resourcesByCode.get('ASSM3').craftedWith = [
            new Recipe([new ProductionValue(1, GameData.resourcesByCode.get('ASSM3'))], GameData.craftingsByCode.get('ASSM1'), [
                new Consumption(2, GameData.resourcesByCode.get('ASSM2')),
                new Consumption(4, GameData.resourcesByCode.get('SM1')),
            ]), 
            new Recipe([new ProductionValue(1.5, GameData.resourcesByCode.get('ASSM3'))], GameData.craftingsByCode.get('ASSM2'), [
                new Consumption(3, GameData.resourcesByCode.get('ASSM2')),
                new Consumption(6, GameData.resourcesByCode.get('SM1')),
            ]), 
            new Recipe([new ProductionValue(2.5, GameData.resourcesByCode.get('ASSM3'))], GameData.craftingsByCode.get('ASSM3'), [
                new Consumption(5, GameData.resourcesByCode.get('ASSM2')),
                new Consumption(10, GameData.resourcesByCode.get('SM1')),
            ])
        ];
        GameData.resourcesByCode.get('SOLPAN').craftedWith = [
            new Recipe([new ProductionValue(0.1, GameData.resourcesByCode.get('SOLPAN'))], GameData.craftingsByCode.get('ASSM2'), [
                new Consumption(0.375, GameData.resourcesByCode.get('COPPL')),
                new Consumption(1.125, GameData.resourcesByCode.get('EC')),
                new Consumption(0.375, GameData.resourcesByCode.get('STEPL'))
            ]), 
            new Recipe([new ProductionValue(0.125, GameData.resourcesByCode.get('SOLPAN'))], GameData.craftingsByCode.get('ASSM3'), [
                new Consumption(0.625, GameData.resourcesByCode.get('COPPL')),
                new Consumption(1.875, GameData.resourcesByCode.get('EC')),
                new Consumption(0.625, GameData.resourcesByCode.get('STEPL'))
            ])
        ];
        GameData.resourcesByCode.get('SM1').craftedWith = [
            new Recipe([new ProductionValue(0.035, GameData.resourcesByCode.get('SM1'))], GameData.craftingsByCode.get('ASSM1'), [
                new Consumption(0.165, GameData.resourcesByCode.get('ADVC')),
                new Consumption(0.165, GameData.resourcesByCode.get('EC'))
            ]), 
            new Recipe([new ProductionValue(0.05, GameData.resourcesByCode.get('SM1'))], GameData.craftingsByCode.get('ASSM2'), [
                new Consumption(0.25, GameData.resourcesByCode.get('ADVC')),
                new Consumption(0.25, GameData.resourcesByCode.get('EC'))
            ]),
            new Recipe([new ProductionValue(0.085, GameData.resourcesByCode.get('SM1'))], GameData.craftingsByCode.get('ASSM3'), [
                new Consumption(0.415, GameData.resourcesByCode.get('ADVC')),
                new Consumption(0.415, GameData.resourcesByCode.get('EC'))
            ])
        ];

        GameData.resourcesByCode.get('SOLFUHO').craftedWith = [
            new Recipe([
                    new ProductionValue(0.35, GameData.resourcesByCode.get('SOLFUEL'))
                ], GameData.craftingsByCode.get('CHEMPLANT'), [new Consumption(6.65, GameData.resourcesByCode.get('HOIL'))])
        ];
        GameData.resourcesByCode.get('SOLFULO').craftedWith = [
            new Recipe([
                    new ProductionValue(0.35, GameData.resourcesByCode.get('SOLFUEL'))
                ], GameData.craftingsByCode.get('CHEMPLANT'), [new Consumption(3.35, GameData.resourcesByCode.get('LOIL'))])
        ];
        GameData.resourcesByCode.get('SOLFUPG').craftedWith = [
            new Recipe([
                    new ProductionValue(0.35, GameData.resourcesByCode.get('SOLFUEL'))
                ], GameData.craftingsByCode.get('CHEMPLANT'), [new Consumption(6.65, GameData.resourcesByCode.get('PGAS'))])
        ];
        GameData.resourcesByCode.get('ROCFUEL').craftedWith = [
            new Recipe([new ProductionValue(0.0165, GameData.resourcesByCode.get('ROCFUEL'))], GameData.craftingsByCode.get('ASSM1'), [
                new Consumption(0.165, GameData.resourcesByCode.get('SOLFUEL'))
            ]), 
            new Recipe([new ProductionValue(0.025, GameData.resourcesByCode.get('ROCFUEL'))], GameData.craftingsByCode.get('ASSM2'), [
                new Consumption(0.25, GameData.resourcesByCode.get('SOLFUEL'))
            ]),
            new Recipe([new ProductionValue(0.0415, GameData.resourcesByCode.get('ROCFUEL'))], GameData.craftingsByCode.get('ASSM3'), [
                new Consumption(0.415, GameData.resourcesByCode.get('SOLFUEL'))
            ])
        ];

        // Building costs.
        GameData.resourcesByCode.get('IROPL').buildCost = [new BuildCost(GameData.resourcesByCode.get('IRONO'), 1)];
        GameData.resourcesByCode.get('COPPL').buildCost = [new BuildCost(GameData.resourcesByCode.get('COPO'), 1)];
        GameData.resourcesByCode.get('STEPL').buildCost = [new BuildCost(GameData.resourcesByCode.get('IROPL'), 5)];
        GameData.resourcesByCode.get('IGW').buildCost = [new BuildCost(GameData.resourcesByCode.get('IROPL'), 2)];
        GameData.resourcesByCode.get('CC').buildCost = [new BuildCost(GameData.resourcesByCode.get('COPPL'), 0.5)];
        GameData.resourcesByCode.get('EC').buildCost = [new BuildCost(GameData.resourcesByCode.get('IROPL'), 1), 
            new BuildCost(GameData.resourcesByCode.get('CC'), 3)];
        GameData.resourcesByCode.get('STOFUR').buildCost = [new BuildCost(GameData.resourcesByCode.get('STO'), 5)];
        GameData.resourcesByCode.get('PIPE').buildCost = [new BuildCost(GameData.resourcesByCode.get('IROPL'), 1)];
        GameData.resourcesByCode.get('STOBR').buildCost = [new BuildCost(GameData.resourcesByCode.get('STO'), 5)];
        GameData.resourcesByCode.get('PLASBAR').buildCost = [new BuildCost(GameData.resourcesByCode.get('COAL'), 1), 
            new BuildCost(GameData.resourcesByCode.get('PGAS'), 20)];
        GameData.resourcesByCode.get('ADVC').buildCost = [new BuildCost(GameData.resourcesByCode.get('CC'), 4), 
            new BuildCost(GameData.resourcesByCode.get('EC'), 2), new BuildCost(GameData.resourcesByCode.get('PLASBAR'), 2)];
        GameData.resourcesByCode.get('ASSM1').buildCost = [new BuildCost(GameData.resourcesByCode.get('EC'), 3), 
            new BuildCost(GameData.resourcesByCode.get('IGW'), 5), new BuildCost(GameData.resourcesByCode.get('IROPL'), 9)];
        GameData.resourcesByCode.get('ASSM2').buildCost = [new BuildCost(GameData.resourcesByCode.get('ASSM1'), 1), 
            new BuildCost(GameData.resourcesByCode.get('EC'), 3), new BuildCost(GameData.resourcesByCode.get('IGW'), 5), new BuildCost(GameData.resourcesByCode.get('IROPL'), 9)];
        GameData.resourcesByCode.get('ASSM3').buildCost = [new BuildCost(GameData.resourcesByCode.get('ASSM2'), 2), 
        new BuildCost(GameData.resourcesByCode.get('SM1'), 4)];
        GameData.resourcesByCode.get('SOLPAN').buildCost = [new BuildCost(GameData.resourcesByCode.get('COPPL'), 5), 
            new BuildCost(GameData.resourcesByCode.get('EC'), 15), new BuildCost(GameData.resourcesByCode.get('STEPL'), 5)];
        GameData.resourcesByCode.get('SM1').buildCost = [new BuildCost(GameData.resourcesByCode.get('ADVC'), 5), 
            new BuildCost(GameData.resourcesByCode.get('EC'), 5)];
        GameData.resourcesByCode.get('ROCFUEL').buildCost = [new BuildCost(GameData.resourcesByCode.get('SOLFUEL'), 10)];

        // Hand crafting costs.
        GameData.resourcesByCode.get('IROPL').handCraftCost = [new BuildCost(GameData.resourcesByCode.get('COAL'), 3.5)];
        GameData.resourcesByCode.get('COPPL').handCraftCost = [new BuildCost(GameData.resourcesByCode.get('COAL'), 3.5)];
        GameData.resourcesByCode.get('STEPL').handCraftCost = [new BuildCost(GameData.resourcesByCode.get('COAL'), 18)];
        GameData.resourcesByCode.get('STOBR').handCraftCost = [new BuildCost(GameData.resourcesByCode.get('COAL'), 15)];
        GameData.resourcesByCode.get('PLASBAR').handCraftCost = [new BuildCost(GameData.resourcesByCode.get('CRUDO'), 10)];
    }

    public static initCraftingDef(): void {
        GameData.craftings = [
            new CraftingItem('BMD', 'Burner mining drill', 'assets/icons/burner-mining-drill.png', [], [], 'MINING'),
            new CraftingItem('EMD', 'Electric mining drill', 'assets/icons/electric-mining-drill.png', [],[], 'MINING'),
            new CraftingItem('STOFUR', 'Stone furnace', 'assets/icons/stone-furnace.png', [], [], 'SMELTING'),
            new CraftingItem('STEFUR', 'Steel furnace', 'assets/icons/steel-furnace.png', [], [], 'SMELTING'),
            new CraftingItem('ELECFUR', 'Electric furnace', 'assets/icons/electric-furnace.png', [], [], 'SMELTING'),
            new CraftingItem('ASSM1', 'Assembling machine 1', 'assets/icons/assembling-machine-1.png', [], [], 'ASSEMBLING'),
            new CraftingItem('ASSM2', 'Assembling machine 2', 'assets/icons/assembling-machine-2.png', [], [], 'ASSEMBLING'),
            new CraftingItem('ASSM3', 'Assembling machine 3', 'assets/icons/assembling-machine-3.png', [], [], 'ASSEMBLING'),
            new CraftingItem('STEAMENG', 'Steam engine', 'assets/icons/steam-engine.png', [], [], 'POWERING'),
            new CraftingItem('SOLPAN', 'Solar panel', 'assets/icons/solar-panel.png', [], [], 'POWERING'),
            new CraftingItem('PUMPJ', 'Pumpjack', 'assets/icons/pumpjack.png', [], [], 'MINING'),
            new CraftingItem('OILREF', 'Oil refinery', 'assets/icons/oil-refinery.png', [], [], 'SMELTING'),
            new CraftingItem('OFFPUMP', 'Offshore pump', 'assets/icons/offshore-pump.png', [], [], 'MINING'),
            new CraftingItem('CHEMPLANT', 'Chemical plant', 'assets/icons/chemical-plant.png', [], [], 'SMELTING'),
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
        GameData.craftingsByCode.get('STEAMENG').consumme = [new Consumption(1, GameData.resourcesByCode.get('COAL')), new Consumption(30, GameData.resourcesByCode.get('WATER'))];
        GameData.craftingsByCode.get('PUMPJ').consumme = [new Consumption(90, GameData.resourcesByCode.get('ELEC'))];
        GameData.craftingsByCode.get('OILREF').consumme = [new Consumption(420, GameData.resourcesByCode.get('ELEC'))];
        GameData.craftingsByCode.get('CHEMPLANT').consumme = [new Consumption(210, GameData.resourcesByCode.get('ELEC'))];
        GameData.craftingsByCode.get('SOLPAN').consumme = [];

        GameData.craftingsByCode.get('BMD').buildCost = [
            new BuildCost(GameData.resourcesByCode.get('IGW'), 3), 
            new BuildCost(GameData.resourcesByCode.get('IROPL'), 3), 
            new BuildCost(GameData.resourcesByCode.get('STOFUR'), 1)
        ];
        GameData.craftingsByCode.get('EMD').buildCost = [
            new BuildCost(GameData.resourcesByCode.get('EC'), 3), 
            new BuildCost(GameData.resourcesByCode.get('IGW'), 5), 
            new BuildCost(GameData.resourcesByCode.get('IROPL'), 10)
        ];
        GameData.craftingsByCode.get('STOFUR').buildCost = [
            new BuildCost(GameData.resourcesByCode.get('STO'), 5)
        ];

        GameData.craftingsByCode.get('STEFUR').buildCost = [
            new BuildCost(GameData.resourcesByCode.get('STEPL'), 6), 
            new BuildCost(GameData.resourcesByCode.get('STOBR'), 10)
        ];
        // FIXME
        //GameData.craftingsByCode.get('ELECFUR').buildCost = [new Consumption(180, [GameData.resourcesByCode.get('ELEC')])];
        GameData.craftingsByCode.get('ASSM1').buildCost = [
            new BuildCost(GameData.resourcesByCode.get('EC'), 3), 
            new BuildCost(GameData.resourcesByCode.get('IGW'), 5), 
            new BuildCost(GameData.resourcesByCode.get('IROPL'), 9)
        ];
        GameData.craftingsByCode.get('ASSM2').buildCost = [
            new BuildCost(GameData.resourcesByCode.get('ASSM1'), 1), 
            new BuildCost(GameData.resourcesByCode.get('EC'), 3), 
            new BuildCost(GameData.resourcesByCode.get('IGW'), 5), 
            new BuildCost(GameData.resourcesByCode.get('IROPL'), 9)
        ];
        GameData.craftingsByCode.get('ASSM3').buildCost = [
            new BuildCost(GameData.resourcesByCode.get('ASSM2'), 2), 
            new BuildCost(GameData.resourcesByCode.get('SM1'), 4)];
        GameData.craftingsByCode.get('STEAMENG').buildCost = [
            new BuildCost(GameData.resourcesByCode.get('IGW'), 8), 
            new BuildCost(GameData.resourcesByCode.get('IROPL'), 10), 
            new BuildCost(GameData.resourcesByCode.get('PIPE'), 5)
        ];
        GameData.craftingsByCode.get('SOLPAN').buildCost = [
            new BuildCost(GameData.resourcesByCode.get('COPPL'), 5), 
            new BuildCost(GameData.resourcesByCode.get('EC'), 15), 
            new BuildCost(GameData.resourcesByCode.get('STEPL'), 5)
        ];
        
        GameData.craftingsByCode.get('PUMPJ').buildCost = [
            new BuildCost(GameData.resourcesByCode.get('EC'), 5), 
            new BuildCost(GameData.resourcesByCode.get('IGW'), 10), 
            new BuildCost(GameData.resourcesByCode.get('PIPE'), 10),
            new BuildCost(GameData.resourcesByCode.get('STEPL'), 5)
        ];
        GameData.craftingsByCode.get('OILREF').buildCost = [
            new BuildCost(GameData.resourcesByCode.get('EC'), 10), 
            new BuildCost(GameData.resourcesByCode.get('IGW'), 10), 
            new BuildCost(GameData.resourcesByCode.get('PIPE'), 10),
            new BuildCost(GameData.resourcesByCode.get('STEPL'), 15),
            new BuildCost(GameData.resourcesByCode.get('STOBR'), 10)
        ];
        GameData.craftingsByCode.get('OFFPUMP').buildCost = [
            new BuildCost(GameData.resourcesByCode.get('EC'), 2), 
            new BuildCost(GameData.resourcesByCode.get('IGW'), 1), 
            new BuildCost(GameData.resourcesByCode.get('PIPE'), 1)
        ];
        GameData.craftingsByCode.get('CHEMPLANT').buildCost = [
            new BuildCost(GameData.resourcesByCode.get('EC'), 5), 
            new BuildCost(GameData.resourcesByCode.get('IGW'), 5), 
            new BuildCost(GameData.resourcesByCode.get('PIPE'), 5),
            new BuildCost(GameData.resourcesByCode.get('STEPL'), 5)
        ];
    }

}

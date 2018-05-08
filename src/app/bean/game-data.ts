import { CraftingItem } from "./crafting-item";
import { ResourceItem } from "./resource-item";
import { Consumption } from "./consumption";
import { BuildCost } from "./build-cost";
import { Recipe, ProductionValue } from "./recipe";
import { ResearchItem } from "./research-item";
import { ResearchCost } from "./research-cost";

export class GameData {

    public static resources:ResourceItem[];

    public static resourcesByCode:Map<string, ResourceItem>;

    public static craftings:CraftingItem[];

    public static craftingsByCode:Map<string, CraftingItem>;

    public static researchItems:ResearchItem[];

    public static researchItemsByCode:Map<string, ResearchItem>;

    public static initGameData(): void {
        GameData.initResourceDef();
        GameData.initCraftingDef();
        GameData.initResourceCost();
        GameData.initCraftingCost();
        GameData.initResearch();
    }

    public static initResearch(): void {
        GameData.researchItems = [
            new ResearchItem('AUTOMAT', 'Automation', 'assets/icons/research/automation.png', false, 
                [
                    new ResearchCost(10, GameData.resourcesByCode.get('SP1'))
                ], 100),
            new ResearchItem('MILI', 'Military', 'assets/icons/research/military.png', false, 
                [
                    new ResearchCost(10, GameData.resourcesByCode.get('SP1'))
                ], 150),
            new ResearchItem('TUR', 'Turrets', 'assets/icons/research/turrets.png', false, 
                [
                    new ResearchCost(10, GameData.resourcesByCode.get('SP1'))
                ], 100),
            new ResearchItem('OPTICS', 'Optics', 'assets/icons/research/optics.png', false, 
                [
                    new ResearchCost(10, GameData.resourcesByCode.get('SP1'))
                ], 150),
            new ResearchItem('STEELPROC', 'Steel processing', 'assets/icons/research/steel-processing.png', false, 
                [
                    new ResearchCost(50, GameData.resourcesByCode.get('SP1'))
                ], 250),
            new ResearchItem('MILI2', 'Military 2', 'assets/icons/research/military.png', false, 
                [
                    new ResearchCost(20, GameData.resourcesByCode.get('SP1')),
                    new ResearchCost(20, GameData.resourcesByCode.get('SP2'))
                ], 300),
            new ResearchItem('ADVCMP', 'Advanced material processing', 'assets/icons/research/advanced-material-processing.png', false, 
                [
                    new ResearchCost(75, GameData.resourcesByCode.get('SP1')),
                    new ResearchCost(75, GameData.resourcesByCode.get('SP2'))
                ], 2250),
            new ResearchItem('CONCRETE', 'Concrete', 'assets/icons/research/concrete.png', false, 
                [
                    new ResearchCost(250, GameData.resourcesByCode.get('SP1')),
                    new ResearchCost(250, GameData.resourcesByCode.get('SP2'))
                ], 7500),
            new ResearchItem('ELECTR', 'Electronics', 'assets/icons/research/electronics.png', false, 
                [
                    new ResearchCost(30, GameData.resourcesByCode.get('SP1'))
                ], 450),
            new ResearchItem('AUTOMAT2', 'Automation 2', 'assets/icons/research/automation.png', false, [new ResearchCost(80, GameData.resourcesByCode.get('SP1'))], 400),
            new ResearchItem('ENGINE', 'Engine', 'assets/icons/research/engine.png', false, [new ResearchCost(100, GameData.resourcesByCode.get('SP1')), new ResearchCost(100, GameData.resourcesByCode.get('SP2'))], 1500),
            new ResearchItem('OILGATH', 'Oil gathering', 'assets/icons/research/oil-gathering.png', false, [new ResearchCost(100, GameData.resourcesByCode.get('SP1')), new ResearchCost(100, GameData.resourcesByCode.get('SP2'))], 3000),
            new ResearchItem('OILPROC', 'Oil processing', 'assets/icons/research/oil-processing.png', false, 
                [
                    new ResearchCost(75, GameData.resourcesByCode.get('SP1')), 
                    new ResearchCost(75, GameData.resourcesByCode.get('SP2')),
                    new ResearchCost(75, GameData.resourcesByCode.get('SP3')),
                ], 2250),
            new ResearchItem('SULFURPROC', 'Sulfur processing', 'assets/icons/research/sulfur-processing.png', false, [new ResearchCost(150, GameData.resourcesByCode.get('SP1')), new ResearchCost(150, GameData.resourcesByCode.get('SP2'))], 4500),
            new ResearchItem('FLAM', 'Flammables', 'assets/icons/research/flammables.png', false, 
                [
                    new ResearchCost(50, GameData.resourcesByCode.get('SP1')), 
                    new ResearchCost(50, GameData.resourcesByCode.get('SP2'))
                ], 1500),
            new ResearchItem('EXPL', 'Explosives', 'assets/icons/research/explosives.png', false, 
                [
                    new ResearchCost(100, GameData.resourcesByCode.get('SP1')), 
                    new ResearchCost(100, GameData.resourcesByCode.get('SP2')),
                    new ResearchCost(100, GameData.resourcesByCode.get('SP4'))
                ], 1500),
            new ResearchItem('BAT', 'Battery', 'assets/icons/research/battery.png', false, [new ResearchCost(150, GameData.resourcesByCode.get('SP1')), new ResearchCost(150, GameData.resourcesByCode.get('SP2'))], 4500),
            new ResearchItem('PLASTICS', 'Plastics', 'assets/icons/research/plastics.png', false, [new ResearchCost(200, GameData.resourcesByCode.get('SP1')), new ResearchCost(200, GameData.resourcesByCode.get('SP2'))], 6000),
            new ResearchItem('ADVCELEC', 'Advanced Electronics', 'assets/icons/research/advanced-electronics.png', false, 
                [
                    new ResearchCost(200, GameData.resourcesByCode.get('SP1')), 
                    new ResearchCost(200, GameData.resourcesByCode.get('SP2'))
                ], 3000),
            new ResearchItem('ADVCMP2', 'Advanced material processing 2', 'assets/icons/research/advanced-material-processing.png', false, 
                [
                    new ResearchCost(250, GameData.resourcesByCode.get('SP1')),
                    new ResearchCost(250, GameData.resourcesByCode.get('SP2')),
                    new ResearchCost(250, GameData.resourcesByCode.get('SP3'))
                ], 7500),
            new ResearchItem('ADVCELEC2', 'Advanced Electronics 2', 'assets/icons/research/advanced-electronics-2.png', false, 
                [
                    new ResearchCost(300, GameData.resourcesByCode.get('SP1')), 
                    new ResearchCost(300, GameData.resourcesByCode.get('SP2')),
                    new ResearchCost(300, GameData.resourcesByCode.get('SP3')),
                ], 9000),
            new ResearchItem('ELECENGINE', 'Electric engine', 'assets/icons/research/electric-engine.png', false, [new ResearchCost(100, GameData.resourcesByCode.get('SP1')), new ResearchCost(100, GameData.resourcesByCode.get('SP2'))], 3000),
            new ResearchItem('MODULES', 'Modules', 'assets/icons/research/module.png', false, [new ResearchCost(100, GameData.resourcesByCode.get('SP1')), new ResearchCost(100, GameData.resourcesByCode.get('SP2'))], 3000),
            new ResearchItem('SMODULES', 'Speed modules', 'assets/icons/research/speed-module.png', false, 
                [
                    new ResearchCost(50, GameData.resourcesByCode.get('SP1')), 
                    new ResearchCost(50, GameData.resourcesByCode.get('SP2'))
                ], 1500),
            new ResearchItem('SMODULES2', 'Speed modules 2', 'assets/icons/research/speed-module.png', false, 
                [
                    new ResearchCost(75, GameData.resourcesByCode.get('SP1')), 
                    new ResearchCost(75, GameData.resourcesByCode.get('SP2')),
                    new ResearchCost(75, GameData.resourcesByCode.get('SP3'))
                ], 2250),
            new ResearchItem('SMODULES3', 'Speed modules 3', 'assets/icons/research/speed-module.png', false, 
                [
                    new ResearchCost(300, GameData.resourcesByCode.get('SP1')), 
                    new ResearchCost(300, GameData.resourcesByCode.get('SP2')),
                    new ResearchCost(300, GameData.resourcesByCode.get('SP3')),
                    new ResearchCost(300, GameData.resourcesByCode.get('SP6'))
                ], 9000),
            new ResearchItem('PMODULES', 'Speed modules', 'assets/icons/research/productivity-module.png', false, 
                [
                    new ResearchCost(50, GameData.resourcesByCode.get('SP1')), 
                    new ResearchCost(50, GameData.resourcesByCode.get('SP2'))
                ], 1500),
            new ResearchItem('PMODULES2', 'Speed modules 2', 'assets/icons/research/productivity-module.png', false, 
                [
                    new ResearchCost(75, GameData.resourcesByCode.get('SP1')), 
                    new ResearchCost(75, GameData.resourcesByCode.get('SP2')),
                    new ResearchCost(75, GameData.resourcesByCode.get('SP3'))
                ], 2250),
            new ResearchItem('PMODULES3', 'Speed modules 3', 'assets/icons/research/productivity-module.png', false, 
                [
                    new ResearchCost(300, GameData.resourcesByCode.get('SP1')), 
                    new ResearchCost(300, GameData.resourcesByCode.get('SP2')),
                    new ResearchCost(300, GameData.resourcesByCode.get('SP3')),
                    new ResearchCost(300, GameData.resourcesByCode.get('SP5'))
                ], 9000),
            new ResearchItem('AUTOMAT3', 'Automation 3', 'assets/icons/research/automation.png', false, 
                [
                    new ResearchCost(80, GameData.resourcesByCode.get('SP1')),
                    new ResearchCost(80, GameData.resourcesByCode.get('SP2')), 
                    new ResearchCost(80, GameData.resourcesByCode.get('SP3')), 
                    new ResearchCost(80, GameData.resourcesByCode.get('SP5'))
                ], 9000),
            new ResearchItem('ELECDIST', 'Electric energy distribution', 'assets/icons/research/electric-energy-distribution.png', false, 
                [
                    new ResearchCost(120, GameData.resourcesByCode.get('SP1')), 
                    new ResearchCost(120, GameData.resourcesByCode.get('SP2'))
                ], 3600),
            new ResearchItem('ELECACCU', 'Electric energy acumulatiors', 'assets/icons/research/electric-energy-acumulators.png', false, 
                [
                    new ResearchCost(150, GameData.resourcesByCode.get('SP1')), 
                    new ResearchCost(150, GameData.resourcesByCode.get('SP2'))
                ], 4500),
            new ResearchItem('SOLENERG', 'Solar energy', 'assets/icons/research/solar-energy.png', false, 
                [
                    new ResearchCost(250, GameData.resourcesByCode.get('SP1')), 
                    new ResearchCost(250, GameData.resourcesByCode.get('SP2'))
                ], 7500),
            new ResearchItem('ROCK', 'Rocketry', 'assets/icons/research/rocketry.png', false, 
                [
                    new ResearchCost(120, GameData.resourcesByCode.get('SP1')), 
                    new ResearchCost(120, GameData.resourcesByCode.get('SP2')),
                    new ResearchCost(120, GameData.resourcesByCode.get('SP4')),
                ], 1800),
            new ResearchItem('ROCKSPE1', 'Rocket speed 1', 'assets/icons/research/rocket-speed.png', false, 
                [
                    new ResearchCost(100, GameData.resourcesByCode.get('SP1')), 
                    new ResearchCost(100, GameData.resourcesByCode.get('SP2')),
                    new ResearchCost(100, GameData.resourcesByCode.get('SP4')),
                ], 3000),
            new ResearchItem('ROCKSPE2', 'Rocket speed 2', 'assets/icons/research/rocket-speed.png', false, 
                [
                    new ResearchCost(200, GameData.resourcesByCode.get('SP1')), 
                    new ResearchCost(200, GameData.resourcesByCode.get('SP2')),
                    new ResearchCost(200, GameData.resourcesByCode.get('SP4')),
                ], 6000),
            new ResearchItem('ROCKSPE3', 'Rocket speed 3', 'assets/icons/research/rocket-speed.png', false, 
                [
                    new ResearchCost(200, GameData.resourcesByCode.get('SP1')), 
                    new ResearchCost(200, GameData.resourcesByCode.get('SP2')),
                    new ResearchCost(200, GameData.resourcesByCode.get('SP3')),
                    new ResearchCost(200, GameData.resourcesByCode.get('SP4')),
                ], 12000),
            new ResearchItem('ROCKSPE4', 'Rocket speed 4', 'assets/icons/research/rocket-speed.png', false, 
                [
                    new ResearchCost(300, GameData.resourcesByCode.get('SP1')), 
                    new ResearchCost(300, GameData.resourcesByCode.get('SP2')),
                    new ResearchCost(300, GameData.resourcesByCode.get('SP3')),
                    new ResearchCost(300, GameData.resourcesByCode.get('SP4')),
                ], 18000),
            new ResearchItem('ROCKSPE5', 'Rocket speed 5', 'assets/icons/research/rocket-speed.png', false, 
                [
                    new ResearchCost(300, GameData.resourcesByCode.get('SP1')), 
                    new ResearchCost(300, GameData.resourcesByCode.get('SP2')),
                    new ResearchCost(300, GameData.resourcesByCode.get('SP3')),
                    new ResearchCost(300, GameData.resourcesByCode.get('SP4')),
                ], 18000),
            new ResearchItem('ROCKSIL', 'Rocket silo', 'assets/icons/research/rocket-silo.png', false, 
                [
                    new ResearchCost(1000, GameData.resourcesByCode.get('SP1')), 
                    new ResearchCost(1000, GameData.resourcesByCode.get('SP2')),
                    new ResearchCost(1000, GameData.resourcesByCode.get('SP3')),
                    new ResearchCost(1000, GameData.resourcesByCode.get('SP4')),
                    new ResearchCost(1000, GameData.resourcesByCode.get('SP5')),
                    new ResearchCost(1000, GameData.resourcesByCode.get('SP6')),
                ], 60000),
        ];

        GameData.researchItemsByCode = new Map(GameData.researchItems.map((item) : [string, ResearchItem] => [item.code, item]));

        // Research tree
        GameData.researchItemsByCode.get('AUTOMAT').dependsOn = [];
        GameData.researchItemsByCode.get('MILI').dependsOn = [];
        GameData.researchItemsByCode.get('MILI2').dependsOn = [GameData.researchItemsByCode.get('MILI'), GameData.researchItemsByCode.get('STEELPROC')];
        GameData.researchItemsByCode.get('OPTICS').dependsOn = [];
        GameData.researchItemsByCode.get('STEELPROC').dependsOn = [];
        GameData.researchItemsByCode.get('FLAM').dependsOn = [GameData.researchItemsByCode.get('OILGATH')];
        GameData.researchItemsByCode.get('EXPL').dependsOn = [GameData.researchItemsByCode.get('SULFURPROC')]
        GameData.researchItemsByCode.get('ADVCMP').dependsOn = [GameData.researchItemsByCode.get('STEELPROC')];
        GameData.researchItemsByCode.get('ADVCMP2').dependsOn = [GameData.researchItemsByCode.get('ADVCMP'), GameData.researchItemsByCode.get('ADVCELEC')];
        GameData.researchItemsByCode.get('CONCRETE').dependsOn = [GameData.researchItemsByCode.get('ADVCMP')];
        GameData.researchItemsByCode.get('ELECTR').dependsOn = [GameData.researchItemsByCode.get('AUTOMAT')];
        GameData.researchItemsByCode.get('AUTOMAT2').dependsOn = [GameData.researchItemsByCode.get('ELECTR')];
        GameData.researchItemsByCode.get('ENGINE').dependsOn = [GameData.researchItemsByCode.get('STEELPROC'), GameData.researchItemsByCode.get('AUTOMAT2')];
        GameData.researchItemsByCode.get('OILGATH').dependsOn = [GameData.researchItemsByCode.get('STEELPROC')];
        GameData.researchItemsByCode.get('OILPROC').dependsOn = [GameData.researchItemsByCode.get('OILGATH')];
        GameData.researchItemsByCode.get('PLASTICS').dependsOn = [GameData.researchItemsByCode.get('OILGATH')];
        GameData.researchItemsByCode.get('ADVCELEC').dependsOn = [GameData.researchItemsByCode.get('ELECTR'), GameData.researchItemsByCode.get('PLASTICS')];
        GameData.researchItemsByCode.get('ADVCELEC2').dependsOn = [GameData.researchItemsByCode.get('ADVCELEC')];
        GameData.researchItemsByCode.get('ELECENGINE').dependsOn = [GameData.researchItemsByCode.get('ADVCELEC'), GameData.researchItemsByCode.get('ENGINE')];
        GameData.researchItemsByCode.get('MODULES').dependsOn = [GameData.researchItemsByCode.get('ADVCELEC')];
        GameData.researchItemsByCode.get('SMODULES').dependsOn = [GameData.researchItemsByCode.get('MODULES')];
        GameData.researchItemsByCode.get('SMODULES2').dependsOn = [GameData.researchItemsByCode.get('SMODULES')];
        GameData.researchItemsByCode.get('SMODULES3').dependsOn = [GameData.researchItemsByCode.get('SMODULES2')];
        GameData.researchItemsByCode.get('PMODULES').dependsOn = [GameData.researchItemsByCode.get('MODULES')];
        GameData.researchItemsByCode.get('PMODULES2').dependsOn = [GameData.researchItemsByCode.get('PMODULES')];
        GameData.researchItemsByCode.get('PMODULES3').dependsOn = [GameData.researchItemsByCode.get('PMODULES2')];
        GameData.researchItemsByCode.get('AUTOMAT3').dependsOn = [GameData.researchItemsByCode.get('AUTOMAT2'), GameData.researchItemsByCode.get('SMODULES')];
        GameData.researchItemsByCode.get('SOLENERG').dependsOn = [GameData.researchItemsByCode.get('ELECTR'), GameData.researchItemsByCode.get('OPTICS'), 
            GameData.researchItemsByCode.get('STEELPROC')];
        GameData.researchItemsByCode.get('SULFURPROC').dependsOn = [GameData.researchItemsByCode.get('OILGATH')];
        GameData.researchItemsByCode.get('BAT').dependsOn = [GameData.researchItemsByCode.get('SULFURPROC')];
        GameData.researchItemsByCode.get('ELECDIST').dependsOn = [GameData.researchItemsByCode.get('ELECTR'), GameData.researchItemsByCode.get('STEELPROC')];
        GameData.researchItemsByCode.get('ELECACCU').dependsOn = [GameData.researchItemsByCode.get('ELECDIST'), GameData.researchItemsByCode.get('BAT')];
        GameData.researchItemsByCode.get('ROCK').dependsOn = [GameData.researchItemsByCode.get('MILI2'), GameData.researchItemsByCode.get('EXPL'),
            GameData.researchItemsByCode.get('FLAM'), GameData.researchItemsByCode.get('ELECTR')];
        GameData.researchItemsByCode.get('ROCKSPE1').dependsOn = [GameData.researchItemsByCode.get('ROCK')];
        GameData.researchItemsByCode.get('ROCKSPE2').dependsOn = [GameData.researchItemsByCode.get('ROCKSPE1')];
        GameData.researchItemsByCode.get('ROCKSPE3').dependsOn = [GameData.researchItemsByCode.get('ROCKSPE2')];
        GameData.researchItemsByCode.get('ROCKSPE4').dependsOn = [GameData.researchItemsByCode.get('ROCKSPE3')];
        GameData.researchItemsByCode.get('ROCKSPE5').dependsOn = [GameData.researchItemsByCode.get('ROCKSPE4')];
        GameData.researchItemsByCode.get('ROCKSIL').dependsOn = [GameData.researchItemsByCode.get('SMODULES3'), GameData.researchItemsByCode.get('PMODULES3'),
            GameData.researchItemsByCode.get('ROCKSPE5'), GameData.researchItemsByCode.get('ADVCELEC2')];
        
        // Item unlocking.
        GameData.researchItemsByCode.get('AUTOMAT').unlocksBuild = [GameData.resourcesByCode.get('ASSM1')];
        GameData.researchItemsByCode.get('STEELPROC').unlocksBuild = [];
        GameData.researchItemsByCode.get('MILI').unlocksBuild = [];
        GameData.researchItemsByCode.get('TUR').unlocksBuild = [GameData.resourcesByCode.get('GUNTUR')];
        GameData.researchItemsByCode.get('MILI2').unlocksBuild = [GameData.resourcesByCode.get('PRM'), GameData.resourcesByCode.get('GRE'),
            GameData.resourcesByCode.get('SP4')];
        GameData.researchItemsByCode.get('ADVCMP').unlocksBuild = [GameData.resourcesByCode.get('STEFUR')];
        GameData.researchItemsByCode.get('ADVCMP2').unlocksBuild = [GameData.resourcesByCode.get('ELECFUR'), GameData.resourcesByCode.get('SP5')];
        GameData.researchItemsByCode.get('CONCRETE').unlocksBuild = [GameData.resourcesByCode.get('CONC')];
        GameData.researchItemsByCode.get('AUTOMAT2').unlocksBuild = [GameData.resourcesByCode.get('ASSM2')];
        GameData.researchItemsByCode.get('ENGINE').unlocksBuild = [GameData.resourcesByCode.get('ENGU')];
        GameData.researchItemsByCode.get('OILGATH').unlocksBuild = [GameData.resourcesByCode.get('PUMPJ'), 
            GameData.resourcesByCode.get('OILREF'), GameData.resourcesByCode.get('CHEMPLANT'), GameData.resourcesByCode.get('SOLFUEL'),
            GameData.resourcesByCode.get('BOILPROC'),
            GameData.resourcesByCode.get('SOLFUHO'), GameData.resourcesByCode.get('SOLFULO'), GameData.resourcesByCode.get('SOLFUPG'), 
            GameData.resourcesByCode.get('LUB'), GameData.resourcesByCode.get('CRUDO'), GameData.resourcesByCode.get('HOIL'), 
            GameData.resourcesByCode.get('LOIL'), GameData.resourcesByCode.get('PGAS')];
        GameData.researchItemsByCode.get('OILPROC').unlocksBuild = [GameData.resourcesByCode.get('ADVOILPROC'),
            GameData.resourcesByCode.get('HOILCRACK'), GameData.resourcesByCode.get('LOILCRACK')];
        GameData.researchItemsByCode.get('PLASTICS').unlocksBuild = [GameData.resourcesByCode.get('PLASBAR')];
        GameData.researchItemsByCode.get('ADVCELEC').unlocksBuild = [GameData.resourcesByCode.get('ADVC'), GameData.resourcesByCode.get('SP3')];
        GameData.researchItemsByCode.get('ADVCELEC2').unlocksBuild = [GameData.resourcesByCode.get('PU'), GameData.resourcesByCode.get('SP6')];
        GameData.researchItemsByCode.get('ELECENGINE').unlocksBuild = [GameData.resourcesByCode.get('EENGU')];
        GameData.researchItemsByCode.get('MODULES').unlocksBuild = [];
        GameData.researchItemsByCode.get('SMODULES').unlocksBuild = [GameData.resourcesByCode.get('SM1')];
        GameData.researchItemsByCode.get('SMODULES2').unlocksBuild = [GameData.resourcesByCode.get('SM2')];
        GameData.researchItemsByCode.get('SMODULES3').unlocksBuild = [GameData.resourcesByCode.get('SM3')];
        GameData.researchItemsByCode.get('PMODULES').unlocksBuild = [GameData.resourcesByCode.get('PM1')];
        GameData.researchItemsByCode.get('PMODULES2').unlocksBuild = [GameData.resourcesByCode.get('PM2')];
        GameData.researchItemsByCode.get('PMODULES3').unlocksBuild = [GameData.resourcesByCode.get('PM3')];
        GameData.researchItemsByCode.get('AUTOMAT3').unlocksBuild = [GameData.resourcesByCode.get('ASSM3')];
        GameData.researchItemsByCode.get('SOLENERG').unlocksBuild = [GameData.resourcesByCode.get('SOLPAN')];
        GameData.researchItemsByCode.get('SULFURPROC').unlocksBuild = [GameData.resourcesByCode.get('SULF'), GameData.resourcesByCode.get('SULFAC')];
        GameData.researchItemsByCode.get('BAT').unlocksBuild = [GameData.resourcesByCode.get('BAT')];
        GameData.researchItemsByCode.get('ELECDIST').unlocksBuild = [];
        GameData.researchItemsByCode.get('ELECACCU').unlocksBuild = [GameData.resourcesByCode.get('ACCU')]
        GameData.researchItemsByCode.get('ROCKSIL').unlocksBuild = [GameData.resourcesByCode.get('RS'), GameData.resourcesByCode.get('LDS'), 
            GameData.resourcesByCode.get('ROCFUEL'), GameData.resourcesByCode.get('RCU'), GameData.resourcesByCode.get('RP'), 
            GameData.resourcesByCode.get('SAT'), GameData.resourcesByCode.get('SP7')]

        // FIXME
        GameData.resourcesByCode.get('ASSM1').unlockedBy = GameData.researchItemsByCode.get('AUTOMAT');
        GameData.craftingsByCode.get('ASSM1').unlockedBy = GameData.researchItemsByCode.get('AUTOMAT');
        GameData.resourcesByCode.get('GUNTUR').unlockedBy = GameData.researchItemsByCode.get('TUR');
        GameData.resourcesByCode.get('PRM').unlockedBy = GameData.researchItemsByCode.get('MILI2');
        GameData.resourcesByCode.get('GRE').unlockedBy = GameData.researchItemsByCode.get('MILI2');
        GameData.resourcesByCode.get('SP4').unlockedBy = GameData.researchItemsByCode.get('MILI2');
        GameData.resourcesByCode.get('STEFUR').unlockedBy = GameData.researchItemsByCode.get('ADVCMP');
        GameData.craftingsByCode.get('STEFUR').unlockedBy = GameData.researchItemsByCode.get('ADVCMP');
        GameData.resourcesByCode.get('CONC').unlockedBy = GameData.researchItemsByCode.get('CONCRETE');
        GameData.resourcesByCode.get('ASSM2').unlockedBy = GameData.researchItemsByCode.get('AUTOMAT2');
        GameData.craftingsByCode.get('ASSM2').unlockedBy = GameData.researchItemsByCode.get('AUTOMAT2');
        GameData.resourcesByCode.get('ASSM3').unlockedBy = GameData.researchItemsByCode.get('AUTOMAT3');
        GameData.craftingsByCode.get('ASSM3').unlockedBy = GameData.researchItemsByCode.get('AUTOMAT3');
        GameData.resourcesByCode.get('ENGU').unlockedBy = GameData.researchItemsByCode.get('ENGINE');
        GameData.resourcesByCode.get('EENGU').unlockedBy = GameData.researchItemsByCode.get('ELECENGINE');
        GameData.resourcesByCode.get('PUMPJ').unlockedBy = GameData.researchItemsByCode.get('OILGATH');
        GameData.craftingsByCode.get('PUMPJ').unlockedBy = GameData.researchItemsByCode.get('OILGATH');
        GameData.resourcesByCode.get('OILREF').unlockedBy = GameData.researchItemsByCode.get('OILGATH');
        GameData.resourcesByCode.get('CHEMPLANT').unlockedBy = GameData.researchItemsByCode.get('OILGATH');
        GameData.resourcesByCode.get('BOILPROC').unlockedBy = GameData.researchItemsByCode.get('OILGATH');
        GameData.resourcesByCode.get('SOLFUHO').unlockedBy = GameData.researchItemsByCode.get('OILGATH');
        GameData.resourcesByCode.get('SOLFULO').unlockedBy = GameData.researchItemsByCode.get('OILGATH');
        GameData.resourcesByCode.get('SOLFUPG').unlockedBy = GameData.researchItemsByCode.get('OILGATH');
        GameData.resourcesByCode.get('SOLFUEL').unlockedBy = GameData.researchItemsByCode.get('OILGATH');
        GameData.resourcesByCode.get('LUB').unlockedBy = GameData.researchItemsByCode.get('OILGATH');
        GameData.resourcesByCode.get('CRUDO').unlockedBy = GameData.researchItemsByCode.get('OILGATH');
        GameData.resourcesByCode.get('HOIL').unlockedBy = GameData.researchItemsByCode.get('OILGATH');
        GameData.resourcesByCode.get('LOIL').unlockedBy = GameData.researchItemsByCode.get('OILGATH');
        GameData.resourcesByCode.get('PGAS').unlockedBy = GameData.researchItemsByCode.get('OILGATH');
        GameData.resourcesByCode.get('SULF').unlockedBy = GameData.researchItemsByCode.get('SULFURPROC');
        GameData.resourcesByCode.get('SULFAC').unlockedBy = GameData.researchItemsByCode.get('SULFURPROC');
        GameData.resourcesByCode.get('BAT').unlockedBy = GameData.researchItemsByCode.get('BAT');
        GameData.resourcesByCode.get('PLASBAR').unlockedBy = GameData.researchItemsByCode.get('PLASTICS');
        GameData.resourcesByCode.get('ADVC').unlockedBy = GameData.researchItemsByCode.get('ADVCELEC');
        GameData.resourcesByCode.get('SP3').unlockedBy = GameData.researchItemsByCode.get('ADVCELEC');
        GameData.resourcesByCode.get('PU').unlockedBy = GameData.researchItemsByCode.get('ADVCELEC2');
        GameData.resourcesByCode.get('SP6').unlockedBy = GameData.researchItemsByCode.get('ADVCELEC2');
        GameData.resourcesByCode.get('ELECFUR').unlockedBy = GameData.researchItemsByCode.get('ADVCMP2');
        GameData.craftingsByCode.get('ELECFUR').unlockedBy = GameData.researchItemsByCode.get('ADVCMP2');
        GameData.resourcesByCode.get('SP5').unlockedBy = GameData.researchItemsByCode.get('ADVCMP2');
        GameData.resourcesByCode.get('SM1').unlockedBy = GameData.researchItemsByCode.get('SMODULES');
        GameData.resourcesByCode.get('SM2').unlockedBy = GameData.researchItemsByCode.get('SMODULES2');
        GameData.resourcesByCode.get('SM3').unlockedBy = GameData.researchItemsByCode.get('SMODULES3');
        GameData.resourcesByCode.get('PM1').unlockedBy = GameData.researchItemsByCode.get('PMODULES');
        GameData.resourcesByCode.get('PM2').unlockedBy = GameData.researchItemsByCode.get('PMODULES2');
        GameData.resourcesByCode.get('PM3').unlockedBy = GameData.researchItemsByCode.get('PMODULES3');
        GameData.resourcesByCode.get('ACCU').unlockedBy = GameData.researchItemsByCode.get('ELECACCU');
        GameData.resourcesByCode.get('SOLPAN').unlockedBy = GameData.researchItemsByCode.get('SOLENERG');
        GameData.craftingsByCode.get('SOLPAN').unlockedBy = GameData.researchItemsByCode.get('SOLENERG');
        GameData.resourcesByCode.get('RS').unlockedBy = GameData.researchItemsByCode.get('ROCKSIL');
        GameData.resourcesByCode.get('LDS').unlockedBy = GameData.researchItemsByCode.get('ROCKSIL');
        GameData.resourcesByCode.get('ROCFUEL').unlockedBy = GameData.researchItemsByCode.get('ROCKSIL');
        GameData.resourcesByCode.get('RCU').unlockedBy = GameData.researchItemsByCode.get('ROCKSIL');
        GameData.resourcesByCode.get('RP').unlockedBy = GameData.researchItemsByCode.get('ROCKSIL');
        GameData.resourcesByCode.get('SAT').unlockedBy = GameData.researchItemsByCode.get('ROCKSIL');
        GameData.resourcesByCode.get('SP7').unlockedBy = GameData.researchItemsByCode.get('ROCKSIL');
        GameData.resourcesByCode.get('ADVOILPROC').unlockedBy = GameData.researchItemsByCode.get('OILPROC');
        GameData.resourcesByCode.get('HOILCRACK').unlockedBy = GameData.researchItemsByCode.get('OILPROC');
        GameData.resourcesByCode.get('LOILCRACK').unlockedBy = GameData.researchItemsByCode.get('OILPROC');
    }

    public static initResourceDef(): void {
        GameData.resources = [
            new ResourceItem('ELEC', 'Electricity', 'assets/icons/electricity-icon-red.png', false, [], 0, [], [], ['ELEC', 'STOCKABLE']),
            new ResourceItem('WATER', 'Water', 'assets/icons/resources/water.png', false, [], 0, [], [], ["MINABLE", 'STOCKABLE']),
            new ResourceItem('COAL', 'Coal', 'assets/icons/resources/coal.png',true,  [],1.25, [], [], ["MINABLE", 'STOCKABLE']),
            new ResourceItem('IRONO','Iron Ore', 'assets/icons/resources/iron-ore.png', true, [], 1.25, [], [], ["MINABLE", 'STOCKABLE']),
            new ResourceItem('COPO', 'Copper Ore', 'assets/icons/resources/copper-ore.png', true, [], 1.25, [], [], ["MINABLE", 'STOCKABLE']),
            new ResourceItem('STO', 'Stone', 'assets/icons/resources/stone.png', true, [], 1, [], [], ["MINABLE", 'STOCKABLE']),
            new ResourceItem('CONC', 'Concrete', 'assets/icons/concrete.png', false, [], 1, [], [], ["CRAFTABLE", 'STOCKABLE']),
            new ResourceItem('STOFUR', 'Stone furnace', 'assets/icons/stone-furnace.png', true, [], 0.5, [], [], ["CRAFTABLE", 'STOCKABLE']),
            new ResourceItem('STEFUR', 'Steel furnace', 'assets/icons/steel-furnace.png', false, [], 0, [], [], []),
            new ResourceItem('ELECFUR', 'Electric furnace', 'assets/icons/electric-furnace.png', true, [], 5, [], [], ["CRAFTABLE", 'STOCKABLE']),
            new ResourceItem('IROPL', 'Iron plate', 'assets/icons/iron-plate.png', true, [], 3.5, [], [], ["SMELTABLE", 'STOCKABLE']),
            new ResourceItem('COPPL', 'Copper plate', 'assets/icons/copper-plate.png', true, [], 3.5, [], [], ["SMELTABLE", 'STOCKABLE']),
            new ResourceItem('STEPL', 'Steel plate', 'assets/icons/steel-plate.png', true, [], 17.5, [], [], ["SMELTABLE", 'STOCKABLE']),
            new ResourceItem('STOBR', 'Stone brick', 'assets/icons/stone-brick.png', true, [], 3.5, [], [], ["SMELTABLE", 'STOCKABLE']),
            new ResourceItem('IGW', 'Iron gear wheel', 'assets/icons/iron-gear-wheel.png', true, [], 0.5, [], [], ["CRAFTABLE", 'STOCKABLE']),
            new ResourceItem('CC', 'Copper cable', 'assets/icons/copper-cable.png', true, [], 0.25, [], [], ["CRAFTABLE", 'STOCKABLE']),
            new ResourceItem('EC', 'Electronic circuit', 'assets/icons/electronic-circuit.png', true, [], 0.5, [], [], ["CRAFTABLE", 'STOCKABLE']),
            new ResourceItem('INS', 'Inserter', 'assets/icons/inserter.png', true, [], 0.5, [], [], ["CRAFTABLE", 'STOCKABLE']),
            new ResourceItem('TB', 'Transport belt', 'assets/icons/transport-belt.png', true, [], 0.25, [], [], ["CRAFTABLE", 'STOCKABLE']),
            new ResourceItem('PIPE', 'Pipe', 'assets/icons/pipe.png', true, [], 0.5, [], [], ["CRAFTABLE", 'STOCKABLE']),
            new ResourceItem('ENGU', 'Engine unit', 'assets/icons/engine-unit.png', false, [], 0, [], [], ["CRAFTABLE", 'STOCKABLE']),
            new ResourceItem('EMD', 'Electric mining drill', 'assets/icons/electric-mining-drill.png', true, [], 2, [], [], ["CRAFTABLE", 'STOCKABLE']),
            new ResourceItem('EENGU', 'Electric engine unit', 'assets/icons/electric-engine-unit.png', false, [], 0, [], [], ["CRAFTABLE", 'STOCKABLE']),
            new ResourceItem('RADAR', 'Radar', 'assets/icons/radar.png', true, [], 0.5, [], [], ['CRAFTABLE', 'STOCKABLE']),
            new ResourceItem('ASSM1', 'Assembling machine 1', 'assets/icons/assembling-machine-1.png', true, [], 0.5, [], [], ['CRAFTABLE', 'STOCKABLE']),
            new ResourceItem('ASSM2', 'Assembling machine 2', 'assets/icons/assembling-machine-2.png', true, [], 0.5, [], [], ['CRAFTABLE', 'STOCKABLE']),
            new ResourceItem('ASSM3', 'Assembling machine 3', 'assets/icons/assembling-machine-3.png', true, [], 0.5, [], [], ['CRAFTABLE', 'STOCKABLE']),
            new ResourceItem('PUMPJ', 'Pumpjack', 'assets/icons/pumpjack.png', false, [], 0, [], [], []),
            new ResourceItem('OILREF', 'Oil refinery', 'assets/icons/oil-refinery.png', false, [], 0, [], [], []),
            new ResourceItem('CHEMPLANT', 'Chemical plant', 'assets/icons/chemical-plant.png', false, [], 0, [], [], []),
            new ResourceItem('ADVC', 'Advanced circuit', 'assets/icons/advanced-circuit.png', true, [], 6, [], [], ['CRAFTABLE', 'STOCKABLE']),
            new ResourceItem('SOLPAN', 'Solar panel', 'assets/icons/solar-panel.png', true, [], 10, [], [], ['CRAFTABLE', 'STOCKABLE']),
            new ResourceItem('SM1', 'Speed module 1', 'assets/icons/speed-module.png', true, [], 15, [], [], ['CRAFTABLE', 'STOCKABLE']),
            new ResourceItem('SM2', 'Speed module 2', 'assets/icons/speed-module-2.png', true, [], 30, [], [], ['CRAFTABLE', 'STOCKABLE']),
            new ResourceItem('SM3', 'Speed module 3', 'assets/icons/speed-module-3.png', true, [], 60, [], [], ['CRAFTABLE', 'STOCKABLE']),
            new ResourceItem('PM1', 'Productivity module 1', 'assets/icons/productivity-module.png', true, [], 15, [], [], ['CRAFTABLE', 'STOCKABLE']),
            new ResourceItem('PM2', 'Productivity module 2', 'assets/icons/productivity-module-2.png', true, [], 30, [], [], ['CRAFTABLE', 'STOCKABLE']),
            new ResourceItem('PM3', 'Productivity module 3', 'assets/icons/productivity-module-3.png', true, [], 60, [], [], ['CRAFTABLE', 'STOCKABLE']),
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
            new ResourceItem('BAT', 'Battery', 'assets/icons/battery.png', false, [], 0, [], [], ['SMELTABLE', 'STOCKABLE']),
            new ResourceItem('ACCU', 'Accumulator', 'assets/icons/accumulator.png', true, [], 10, [], [], ['CRAFTABLE', 'STOCKABLE']),
            new ResourceItem('PLASBAR', 'Plastic bar', 'assets/icons/plastic-bar.png', true, [], 1, [], [], ['CRAFTABLE', 'STOCKABLE']),
            new ResourceItem('SOLFUEL', 'Solid fuel', 'assets/icons/solid-fuel.png', false, [], 0, [], [], ['STOCKABLE']),
            new ResourceItem('ROCFUEL', 'Rocket fuel', 'assets/icons/rocket-fuel.png', true, [], 30, [], [], ['CRAFTABLE', 'STOCKABLE']),
            new ResourceItem('LDS', 'Low density structure', 'assets/icons/rocket-structure.png', true, [], 30, [], [], ['CRAFTABLE', 'STOCKABLE']),
            new ResourceItem('PU', 'Processing unit', 'assets/icons/processing-unit.png', false, [], 0, [], [], ['CRAFTABLE', 'STOCKABLE']),
            new ResourceItem('RCU', 'Rocket control unit', 'assets/icons/rocket-control-unit.png', true, [], 30, [], [], ['CRAFTABLE', 'STOCKABLE']),
            new ResourceItem('RP', 'Rocket part', 'assets/icons/rocket-part.png', true, [], 3, [], [], ['CRAFTABLE', 'STOCKABLE']),
            new ResourceItem('SAT', 'Satellite', 'assets/icons/satellite.png', true, [], 5, [], [], ['CRAFTABLE', 'STOCKABLE']),
            new ResourceItem('GRE', 'Grenade', 'assets/icons/grenade.png', true, [], 8, [], [], ['CRAFTABLE', 'STOCKABLE']),
            new ResourceItem('GUNTUR', 'Gun turret', 'assets/icons/gun-turret.png', true, [], 8, [], [], ['CRAFTABLE', 'STOCKABLE']),
            new ResourceItem('FAM', 'Firearm magazine', 'assets/icons/firearm-magazine.png', true, [], 1, [], [], ['CRAFTABLE', 'STOCKABLE']),
            new ResourceItem('PRM', 'Piercing rounds magazine', 'assets/icons/piercing-rounds-magazine.png', true, [], 3, [], [], ['CRAFTABLE', 'STOCKABLE']),
            new ResourceItem('SP1', 'Science pack 1', 'assets/icons/science-pack-1.png', true, [], 5, [], [], ['CRAFTABLE', 'STOCKABLE', 'SCIENCE_PACK']),
            new ResourceItem('SP2', 'Science pack 2', 'assets/icons/science-pack-2.png', true, [], 6, [], [], ['CRAFTABLE', 'STOCKABLE', 'SCIENCE_PACK']),
            new ResourceItem('SP3', 'Science pack 3', 'assets/icons/science-pack-3.png', true, [], 12, [], [], ['CRAFTABLE', 'STOCKABLE', 'SCIENCE_PACK']),
            new ResourceItem('SP4', 'Military science pack', 'assets/icons/military-science-pack.png', true, [], 5, [], [], ['CRAFTABLE', 'STOCKABLE', 'SCIENCE_PACK']),
            new ResourceItem('SP5', 'Production science pack', 'assets/icons/production-science-pack.png', true, [], 7, [], [], ['CRAFTABLE', 'STOCKABLE', 'SCIENCE_PACK']),
            new ResourceItem('SP6', 'High tech science pack', 'assets/icons/high-tech-science-pack.png', true, [], 7, [], [], ['CRAFTABLE', 'STOCKABLE', 'SCIENCE_PACK']),
            new ResourceItem('SP7', 'Space science pack', 'assets/icons/space-science-pack.png', false, [], 0, [], [], ['STOCKABLE', 'SCIENCE_PACK']),
            new ResourceItem('RS', 'Rocket silo', 'assets/icons/rocket-silo.png', false, [], 0, [], [], []),
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
        GameData.resourcesByCode.get('ENGU').craftedWith = [
            new Recipe([new ProductionValue(0.05, GameData.resourcesByCode.get('ENGU'))], GameData.craftingsByCode.get('ASSM1'), [
                new Consumption(0.05, GameData.resourcesByCode.get('IGW')),
                new Consumption(0.1, GameData.resourcesByCode.get('PIPE')),
                new Consumption(0.05, GameData.resourcesByCode.get('STEPL'))
            ]), 
            new Recipe([new ProductionValue(0.075, GameData.resourcesByCode.get('ENGU'))], GameData.craftingsByCode.get('ASSM2'), [
                new Consumption(0.075, GameData.resourcesByCode.get('IGW')),
                new Consumption(0.15, GameData.resourcesByCode.get('PIPE')),
                new Consumption(0.075, GameData.resourcesByCode.get('STEPL'))
            ]), 
            new Recipe([new ProductionValue(0.125, GameData.resourcesByCode.get('ENGU'))], GameData.craftingsByCode.get('ASSM3'), [
                new Consumption(0.125, GameData.resourcesByCode.get('IGW')),
                new Consumption(0.25, GameData.resourcesByCode.get('PIPE')),
                new Consumption(0.125, GameData.resourcesByCode.get('STEPL'))
            ])
        ];
        GameData.resourcesByCode.get('ACCU').craftedWith = [
            new Recipe([new ProductionValue(0.05, GameData.resourcesByCode.get('ACCU'))], GameData.craftingsByCode.get('ASSM1'), [
                new Consumption(0.25, GameData.resourcesByCode.get('BAT')),
                new Consumption(0.1, GameData.resourcesByCode.get('IROPL'))
            ]), 
            new Recipe([new ProductionValue(0.075, GameData.resourcesByCode.get('ACCU'))], GameData.craftingsByCode.get('ASSM2'), [
                new Consumption(0.375, GameData.resourcesByCode.get('BAT')),
                new Consumption(0.15, GameData.resourcesByCode.get('IROPL'))
            ]), 
            new Recipe([new ProductionValue(0.125, GameData.resourcesByCode.get('ACCU'))], GameData.craftingsByCode.get('ASSM3'), [
                new Consumption(0.625, GameData.resourcesByCode.get('BAT')),
                new Consumption(0.25, GameData.resourcesByCode.get('IROPL'))
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
        GameData.resourcesByCode.get('BAT').craftedWith = [
            new Recipe([
                    new ProductionValue(0.2, GameData.resourcesByCode.get('BAT'))
                ], GameData.craftingsByCode.get('CHEMPLANT'), [new Consumption(0.2, GameData.resourcesByCode.get('COPPL')), 
                    new Consumption(0.2, GameData.resourcesByCode.get('IROPL')),
                    new Consumption(4, GameData.resourcesByCode.get('SULFAC'))])
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
        GameData.resourcesByCode.get('CONC').craftedWith = [
            new Recipe([new ProductionValue(0.75, GameData.resourcesByCode.get('CONC'))], GameData.craftingsByCode.get('ASSM2'), [
                new Consumption(0.075, GameData.resourcesByCode.get('IRONO')),
                new Consumption(0.375, GameData.resourcesByCode.get('STOBR')),
                new Consumption(7.5, GameData.resourcesByCode.get('WATER'))
            ]), 
            new Recipe([new ProductionValue(1.25, GameData.resourcesByCode.get('CONC'))], GameData.craftingsByCode.get('ASSM3'), [
                new Consumption(0.125, GameData.resourcesByCode.get('IRONO')),
                new Consumption(0.625, GameData.resourcesByCode.get('STOBR')),
                new Consumption(12.5, GameData.resourcesByCode.get('WATER'))
            ])
        ];
        GameData.resourcesByCode.get('EENGU').craftedWith = [
            new Recipe([new ProductionValue(0.075, GameData.resourcesByCode.get('EENGU'))], GameData.craftingsByCode.get('ASSM2'), [
                new Consumption(0.15, GameData.resourcesByCode.get('EC')),
                new Consumption(0.075, GameData.resourcesByCode.get('ENGU')),
                new Consumption(1.125, GameData.resourcesByCode.get('LUB'))
            ]), 
            new Recipe([new ProductionValue(0.125, GameData.resourcesByCode.get('EENGU'))], GameData.craftingsByCode.get('ASSM3'), [
                new Consumption(0.25, GameData.resourcesByCode.get('EC')),
                new Consumption(0.125, GameData.resourcesByCode.get('ENGU')),
                new Consumption(1.875, GameData.resourcesByCode.get('LUB'))
            ])
        ];
        GameData.resourcesByCode.get('PU').craftedWith = [
            new Recipe([new ProductionValue(0.075, GameData.resourcesByCode.get('PU'))], GameData.craftingsByCode.get('ASSM2'), [
                new Consumption(0.15, GameData.resourcesByCode.get('ADVC')),
                new Consumption(1.5, GameData.resourcesByCode.get('EC')),
                new Consumption(0.375, GameData.resourcesByCode.get('SULFAC'))
            ]), 
            new Recipe([new ProductionValue(0.125, GameData.resourcesByCode.get('PU'))], GameData.craftingsByCode.get('ASSM3'), [
                new Consumption(0.25, GameData.resourcesByCode.get('ADVC')),
                new Consumption(2.5, GameData.resourcesByCode.get('EC')),
                new Consumption(0.625, GameData.resourcesByCode.get('SULFAC'))
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
        GameData.resourcesByCode.get('RADAR').craftedWith = [
            new Recipe([new ProductionValue(1, GameData.resourcesByCode.get('RADAR'))], GameData.craftingsByCode.get('ASSM1'), [
                new Consumption(5, GameData.resourcesByCode.get('EC')),
                new Consumption(5, GameData.resourcesByCode.get('IGW')),
                new Consumption(10, GameData.resourcesByCode.get('IROPL'))
            ]),
            new Recipe([new ProductionValue(1.5, GameData.resourcesByCode.get('RADAR'))], GameData.craftingsByCode.get('ASSM2'), [
                new Consumption(7.5, GameData.resourcesByCode.get('EC')),
                new Consumption(7.5, GameData.resourcesByCode.get('IGW')),
                new Consumption(15, GameData.resourcesByCode.get('IROPL'))
            ]), 
            new Recipe([new ProductionValue(2.5, GameData.resourcesByCode.get('RADAR'))], GameData.craftingsByCode.get('ASSM3'), [
                new Consumption(12.5, GameData.resourcesByCode.get('EC')),
                new Consumption(12.5, GameData.resourcesByCode.get('IGW')),
                new Consumption(25, GameData.resourcesByCode.get('IROPL'))
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
        GameData.resourcesByCode.get('SM2').craftedWith = [
            new Recipe([new ProductionValue(0.025, GameData.resourcesByCode.get('SM2'))], GameData.craftingsByCode.get('ASSM2'), [
                new Consumption(0.125, GameData.resourcesByCode.get('ADVC')),
                new Consumption(0.125, GameData.resourcesByCode.get('PU')),
                new Consumption(0.1, GameData.resourcesByCode.get('SM1'))
            ]),
            new Recipe([new ProductionValue(0.0415, GameData.resourcesByCode.get('SM2'))], GameData.craftingsByCode.get('ASSM3'), [
                new Consumption(0.2085, GameData.resourcesByCode.get('ADVC')),
                new Consumption(0.2085, GameData.resourcesByCode.get('PU')),
                new Consumption(0.165, GameData.resourcesByCode.get('SM1'))
            ])
        ];
        GameData.resourcesByCode.get('SM3').craftedWith = [
            new Recipe([new ProductionValue(0.0125, GameData.resourcesByCode.get('SM3'))], GameData.craftingsByCode.get('ASSM2'), [
                new Consumption(0.0625, GameData.resourcesByCode.get('ADVC')),
                new Consumption(0.0625, GameData.resourcesByCode.get('PU')),
                new Consumption(0.0625, GameData.resourcesByCode.get('SM2'))
            ]),
            new Recipe([new ProductionValue(0.02085, GameData.resourcesByCode.get('SM3'))], GameData.craftingsByCode.get('ASSM3'), [
                new Consumption(0.105, GameData.resourcesByCode.get('ADVC')),
                new Consumption(0.105, GameData.resourcesByCode.get('PU')),
                new Consumption(0.105, GameData.resourcesByCode.get('SM2'))
            ])
        ];
        GameData.resourcesByCode.get('PM1').craftedWith = [
            new Recipe([new ProductionValue(0.035, GameData.resourcesByCode.get('PM1'))], GameData.craftingsByCode.get('ASSM1'), [
                new Consumption(0.165, GameData.resourcesByCode.get('ADVC')),
                new Consumption(0.165, GameData.resourcesByCode.get('EC'))
            ]), 
            new Recipe([new ProductionValue(0.05, GameData.resourcesByCode.get('PM1'))], GameData.craftingsByCode.get('ASSM2'), [
                new Consumption(0.25, GameData.resourcesByCode.get('ADVC')),
                new Consumption(0.25, GameData.resourcesByCode.get('EC'))
            ]),
            new Recipe([new ProductionValue(0.085, GameData.resourcesByCode.get('PM1'))], GameData.craftingsByCode.get('ASSM3'), [
                new Consumption(0.415, GameData.resourcesByCode.get('ADVC')),
                new Consumption(0.415, GameData.resourcesByCode.get('EC'))
            ])
        ];
        GameData.resourcesByCode.get('PM2').craftedWith = [
            new Recipe([new ProductionValue(0.025, GameData.resourcesByCode.get('PM2'))], GameData.craftingsByCode.get('ASSM2'), [
                new Consumption(0.125, GameData.resourcesByCode.get('ADVC')),
                new Consumption(0.125, GameData.resourcesByCode.get('PU')),
                new Consumption(0.1, GameData.resourcesByCode.get('PM1'))
            ]),
            new Recipe([new ProductionValue(0.0415, GameData.resourcesByCode.get('PM2'))], GameData.craftingsByCode.get('ASSM3'), [
                new Consumption(0.2085, GameData.resourcesByCode.get('ADVC')),
                new Consumption(0.2085, GameData.resourcesByCode.get('PU')),
                new Consumption(0.165, GameData.resourcesByCode.get('PM1'))
            ])
        ];
        GameData.resourcesByCode.get('PM3').craftedWith = [
            new Recipe([new ProductionValue(0.0125, GameData.resourcesByCode.get('PM3'))], GameData.craftingsByCode.get('ASSM2'), [
                new Consumption(0.0625, GameData.resourcesByCode.get('ADVC')),
                new Consumption(0.0625, GameData.resourcesByCode.get('PU')),
                new Consumption(0.0625, GameData.resourcesByCode.get('PM2'))
            ]),
            new Recipe([new ProductionValue(0.02085, GameData.resourcesByCode.get('PM3'))], GameData.craftingsByCode.get('ASSM3'), [
                new Consumption(0.105, GameData.resourcesByCode.get('ADVC')),
                new Consumption(0.105, GameData.resourcesByCode.get('PU')),
                new Consumption(0.105, GameData.resourcesByCode.get('PM2'))
            ])
        ];
        GameData.resourcesByCode.get('RCU').craftedWith = [
            new Recipe([new ProductionValue(0.0165, GameData.resourcesByCode.get('RCU'))], GameData.craftingsByCode.get('ASSM1'), [
                new Consumption(0.0165, GameData.resourcesByCode.get('PU')),
                new Consumption(0.0165, GameData.resourcesByCode.get('SM1'))
            ]), 
            new Recipe([new ProductionValue(0.025, GameData.resourcesByCode.get('RCU'))], GameData.craftingsByCode.get('ASSM2'), [
                new Consumption(0.025, GameData.resourcesByCode.get('PU')),
                new Consumption(0.02525, GameData.resourcesByCode.get('SM1'))
            ]),
            new Recipe([new ProductionValue(0.0415, GameData.resourcesByCode.get('RCU'))], GameData.craftingsByCode.get('ASSM3'), [
                new Consumption(0.0415, GameData.resourcesByCode.get('PU')),
                new Consumption(0.0415, GameData.resourcesByCode.get('SM1'))
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
        GameData.resourcesByCode.get('LDS').craftedWith = [
            new Recipe([new ProductionValue(0.0165, GameData.resourcesByCode.get('LDS'))], GameData.craftingsByCode.get('ASSM1'), [
                new Consumption(0.0835, GameData.resourcesByCode.get('COPPL')),
                new Consumption(0.0835, GameData.resourcesByCode.get('PLASBAR')),
                new Consumption(0.165, GameData.resourcesByCode.get('STEPL'))
            ]), 
            new Recipe([new ProductionValue(0.025, GameData.resourcesByCode.get('LDS'))], GameData.craftingsByCode.get('ASSM2'), [
                new Consumption(0.125, GameData.resourcesByCode.get('COPPL')),
                new Consumption(0.125, GameData.resourcesByCode.get('PLASBAR')),
                new Consumption(0.25, GameData.resourcesByCode.get('STEPL'))
            ]),
            new Recipe([new ProductionValue(0.0415, GameData.resourcesByCode.get('LDS'))], GameData.craftingsByCode.get('ASSM3'), [
                new Consumption(0.208, GameData.resourcesByCode.get('COPPL')),
                new Consumption(0.208, GameData.resourcesByCode.get('PLASBAR')),
                new Consumption(0.416, GameData.resourcesByCode.get('STEPL'))
            ])
        ];
        GameData.resourcesByCode.get('SAT').craftedWith = [
            new Recipe([new ProductionValue(0.25, GameData.resourcesByCode.get('SAT'))], GameData.craftingsByCode.get('ASSM3'), [
                new Consumption(25, GameData.resourcesByCode.get('ACCU')),
                new Consumption(25, GameData.resourcesByCode.get('LDS')),
                new Consumption(25, GameData.resourcesByCode.get('PU')),
                new Consumption(1.25, GameData.resourcesByCode.get('RADAR')),
                new Consumption(12.5, GameData.resourcesByCode.get('ROCFUEL')),
                new Consumption(25, GameData.resourcesByCode.get('SOLPAN'))
            ])
        ];
        GameData.resourcesByCode.get('ELECFUR').craftedWith = [
            new Recipe([new ProductionValue(0.15, GameData.resourcesByCode.get('ELECFUR'))], GameData.craftingsByCode.get('ASSM2'), [
                new Consumption(0.75, GameData.resourcesByCode.get('ADVC')),
                new Consumption(1.5, GameData.resourcesByCode.get('STEPL')),
                new Consumption(1.5, GameData.resourcesByCode.get('STOBR'))
            ]),
            new Recipe([new ProductionValue(0.25, GameData.resourcesByCode.get('ELECFUR'))], GameData.craftingsByCode.get('ASSM3'), [
                new Consumption(1.25, GameData.resourcesByCode.get('ADVC')),
                new Consumption(2.5, GameData.resourcesByCode.get('STEPL')),
                new Consumption(2.5, GameData.resourcesByCode.get('STOBR'))
            ])
        ];
        GameData.resourcesByCode.get('RP').craftedWith = [
            new Recipe([new ProductionValue(0.35, GameData.resourcesByCode.get('RP'))], GameData.craftingsByCode.get('RS'), [
                new Consumption(3.35, GameData.resourcesByCode.get('LDS')),
                new Consumption(3.35, GameData.resourcesByCode.get('RCU')),
                new Consumption(3.35, GameData.resourcesByCode.get('ROCFUEL'))
            ])
        ];
        GameData.resourcesByCode.get('INS').craftedWith = [
            new Recipe([new ProductionValue(1.5, GameData.resourcesByCode.get('INS'))], GameData.craftingsByCode.get('ASSM2'), [
                new Consumption(1.5, GameData.resourcesByCode.get('EC')),
                new Consumption(1.5, GameData.resourcesByCode.get('IGW')),
                new Consumption(1.5, GameData.resourcesByCode.get('IROPL'))
            ]),
            new Recipe([new ProductionValue(2.5, GameData.resourcesByCode.get('INS'))], GameData.craftingsByCode.get('ASSM3'), [
                new Consumption(2.5, GameData.resourcesByCode.get('EC')),
                new Consumption(2.5, GameData.resourcesByCode.get('IGW')),
                new Consumption(2.5, GameData.resourcesByCode.get('IROPL'))
            ])
        ];
        GameData.resourcesByCode.get('TB').craftedWith = [
            new Recipe([new ProductionValue(2, GameData.resourcesByCode.get('TB'))], GameData.craftingsByCode.get('ASSM1'), [
                new Consumption(1, GameData.resourcesByCode.get('IGW')),
                new Consumption(1, GameData.resourcesByCode.get('IROPL'))
            ]),
            new Recipe([new ProductionValue(3, GameData.resourcesByCode.get('TB'))], GameData.craftingsByCode.get('ASSM2'), [
                new Consumption(1.5, GameData.resourcesByCode.get('IGW')),
                new Consumption(1.5, GameData.resourcesByCode.get('IROPL'))
            ]),
            new Recipe([new ProductionValue(5, GameData.resourcesByCode.get('TB'))], GameData.craftingsByCode.get('ASSM3'), [
                new Consumption(2.5, GameData.resourcesByCode.get('IGW')),
                new Consumption(2.5, GameData.resourcesByCode.get('IROPL'))
            ])
        ];
        GameData.resourcesByCode.get('GRE').craftedWith = [
            new Recipe([new ProductionValue(0.0625, GameData.resourcesByCode.get('GRE'))], GameData.craftingsByCode.get('ASSM1'), [
                new Consumption(0.625, GameData.resourcesByCode.get('COAL')),
                new Consumption(0.3125, GameData.resourcesByCode.get('IROPL'))
            ]),
            new Recipe([new ProductionValue(0.09375, GameData.resourcesByCode.get('GRE'))], GameData.craftingsByCode.get('ASSM2'), [
                new Consumption(0.9375, GameData.resourcesByCode.get('COAL')),
                new Consumption(0.46875, GameData.resourcesByCode.get('IROPL'))
            ]),
            new Recipe([new ProductionValue(0.15625, GameData.resourcesByCode.get('GRE'))], GameData.craftingsByCode.get('ASSM3'), [
                new Consumption(1.5625, GameData.resourcesByCode.get('COAL')),
                new Consumption(0.78125, GameData.resourcesByCode.get('IROPL'))
            ])
        ];
        GameData.resourcesByCode.get('GUNTUR').craftedWith = [
            new Recipe([new ProductionValue(0.09375, GameData.resourcesByCode.get('GUNTUR'))], GameData.craftingsByCode.get('ASSM2'), [
                new Consumption(0.9375, GameData.resourcesByCode.get('COPPL')),
                new Consumption(0.9375, GameData.resourcesByCode.get('IGW')),
                new Consumption(1.875, GameData.resourcesByCode.get('IROPL'))
            ]),
            new Recipe([new ProductionValue(0.15625, GameData.resourcesByCode.get('GUNTUR'))], GameData.craftingsByCode.get('ASSM3'), [
                new Consumption(1.5625, GameData.resourcesByCode.get('COPPL')),
                new Consumption(1.5625, GameData.resourcesByCode.get('IGW')),
                new Consumption(3.125, GameData.resourcesByCode.get('IROPL'))
            ])
        ];
        GameData.resourcesByCode.get('EMD').craftedWith = [
            new Recipe([new ProductionValue(0.375, GameData.resourcesByCode.get('EMD'))], GameData.craftingsByCode.get('ASSM2'), [
                new Consumption(1.125, GameData.resourcesByCode.get('EC')),
                new Consumption(1.875, GameData.resourcesByCode.get('IGW')),
                new Consumption(3.75, GameData.resourcesByCode.get('IROPL'))
            ]),
            new Recipe([new ProductionValue(0.625, GameData.resourcesByCode.get('EMD'))], GameData.craftingsByCode.get('ASSM3'), [
                new Consumption(1.875, GameData.resourcesByCode.get('EC')),
                new Consumption(3.125, GameData.resourcesByCode.get('IGW')),
                new Consumption(6.25, GameData.resourcesByCode.get('IROPL'))
            ])
        ];
        GameData.resourcesByCode.get('PRM').craftedWith = [
            new Recipe([new ProductionValue(0.25, GameData.resourcesByCode.get('PRM'))], GameData.craftingsByCode.get('ASSM2'), [
                new Consumption(1.25, GameData.resourcesByCode.get('COPPL')),
                new Consumption(0.25, GameData.resourcesByCode.get('FAM')),
                new Consumption(0.25, GameData.resourcesByCode.get('STEPL'))
            ]),
            new Recipe([new ProductionValue(0.415, GameData.resourcesByCode.get('PRM'))], GameData.craftingsByCode.get('ASSM3'), [
                new Consumption(2.085, GameData.resourcesByCode.get('COPPL')),
                new Consumption(0.415, GameData.resourcesByCode.get('FAM')),
                new Consumption(0.415, GameData.resourcesByCode.get('STEPL'))
            ])
        ];
        GameData.resourcesByCode.get('FAM').craftedWith = [
            new Recipe([new ProductionValue(0.5, GameData.resourcesByCode.get('FAM'))], GameData.craftingsByCode.get('ASSM1'), [
                new Consumption(2, GameData.resourcesByCode.get('IROPL'))
            ]),
            new Recipe([new ProductionValue(0.75, GameData.resourcesByCode.get('FAM'))], GameData.craftingsByCode.get('ASSM2'), [
                new Consumption(3, GameData.resourcesByCode.get('IROPL'))
            ]),
            new Recipe([new ProductionValue(1.25, GameData.resourcesByCode.get('FAM'))], GameData.craftingsByCode.get('ASSM3'), [
                new Consumption(5, GameData.resourcesByCode.get('IROPL'))
            ])
        ];
        GameData.resourcesByCode.get('SP1').craftedWith = [
            new Recipe([new ProductionValue(0.1, GameData.resourcesByCode.get('SP1'))], GameData.craftingsByCode.get('ASSM1'), [
                new Consumption(0.1, GameData.resourcesByCode.get('COPPL')),
                new Consumption(0.1, GameData.resourcesByCode.get('IGW'))
            ]), 
            new Recipe([new ProductionValue(0.15, GameData.resourcesByCode.get('SP1'))], GameData.craftingsByCode.get('ASSM2'), [
                new Consumption(0.15, GameData.resourcesByCode.get('COPPL')),
                new Consumption(0.15, GameData.resourcesByCode.get('IGW'))
            ]),
            new Recipe([new ProductionValue(0.25, GameData.resourcesByCode.get('SP1'))], GameData.craftingsByCode.get('ASSM3'), [
                new Consumption(0.25, GameData.resourcesByCode.get('COPPL')),
                new Consumption(0.25, GameData.resourcesByCode.get('IGW'))
            ])
        ];
        GameData.resourcesByCode.get('SP2').craftedWith = [
            new Recipe([new ProductionValue(0.085, GameData.resourcesByCode.get('SP2'))], GameData.craftingsByCode.get('ASSM1'), [
                new Consumption(0.085, GameData.resourcesByCode.get('INS')),
                new Consumption(0.085, GameData.resourcesByCode.get('TB'))
            ]), 
            new Recipe([new ProductionValue(0.125, GameData.resourcesByCode.get('SP2'))], GameData.craftingsByCode.get('ASSM2'), [
                new Consumption(0.125, GameData.resourcesByCode.get('INS')),
                new Consumption(0.125, GameData.resourcesByCode.get('TB'))
            ]),
            new Recipe([new ProductionValue(0.21, GameData.resourcesByCode.get('SP2'))], GameData.craftingsByCode.get('ASSM3'), [
                new Consumption(0.21, GameData.resourcesByCode.get('INS')),
                new Consumption(0.21, GameData.resourcesByCode.get('TB'))
            ])
        ];
        GameData.resourcesByCode.get('SP3').craftedWith = [
            new Recipe([new ProductionValue(0.0625, GameData.resourcesByCode.get('SP3'))], GameData.craftingsByCode.get('ASSM2'), [
                new Consumption(0.0625, GameData.resourcesByCode.get('ADVC')),
                new Consumption(0.0625, GameData.resourcesByCode.get('EMD')),
                new Consumption(0.0625, GameData.resourcesByCode.get('ENGU'))
            ]),
            new Recipe([new ProductionValue(0.1045, GameData.resourcesByCode.get('SP3'))], GameData.craftingsByCode.get('ASSM3'), [
                new Consumption(0.1045, GameData.resourcesByCode.get('ADVC')),
                new Consumption(0.1045, GameData.resourcesByCode.get('EMD')),
                new Consumption(0.1045, GameData.resourcesByCode.get('ENGU'))
            ])
        ];
        GameData.resourcesByCode.get('SP4').craftedWith = [
            new Recipe([new ProductionValue(0.15, GameData.resourcesByCode.get('SP4'))], GameData.craftingsByCode.get('ASSM2'), [
                new Consumption(0.15, GameData.resourcesByCode.get('GRE')),
                new Consumption(0.15, GameData.resourcesByCode.get('GUNTUR')),
                new Consumption(0.15, GameData.resourcesByCode.get('PRM'))
            ]),
            new Recipe([new ProductionValue(0.25, GameData.resourcesByCode.get('SP4'))], GameData.craftingsByCode.get('ASSM3'), [
                new Consumption(0.25, GameData.resourcesByCode.get('GRE')),
                new Consumption(0.25, GameData.resourcesByCode.get('GUNTUR')),
                new Consumption(0.25, GameData.resourcesByCode.get('PRM'))
            ])
        ];
        GameData.resourcesByCode.get('SP5').craftedWith = [
            new Recipe([new ProductionValue(0.105, GameData.resourcesByCode.get('SP5'))], GameData.craftingsByCode.get('ASSM2'), [
                new Consumption(0.105, GameData.resourcesByCode.get('EENGU')),
                new Consumption(0.105, GameData.resourcesByCode.get('ELECFUR'))
            ]),
            new Recipe([new ProductionValue(0.1785, GameData.resourcesByCode.get('SP5'))], GameData.craftingsByCode.get('ASSM3'), [
                new Consumption(0.1785, GameData.resourcesByCode.get('EENGU')),
                new Consumption(0.1785, GameData.resourcesByCode.get('ELECFUR'))
            ])
        ];
        GameData.resourcesByCode.get('SP6').craftedWith = [
            new Recipe([new ProductionValue(0.105, GameData.resourcesByCode.get('SP6'))], GameData.craftingsByCode.get('ASSM2'), [
                new Consumption(0.105, GameData.resourcesByCode.get('BAT')),
                new Consumption(11.25, GameData.resourcesByCode.get('CC')),
                new Consumption(1.125, GameData.resourcesByCode.get('PU')),
                new Consumption(0.105, GameData.resourcesByCode.get('SM1'))
            ]),
            new Recipe([new ProductionValue(0.1785, GameData.resourcesByCode.get('SP6'))], GameData.craftingsByCode.get('ASSM3'), [
                new Consumption(0.1785, GameData.resourcesByCode.get('BAT')),
                new Consumption(18.75, GameData.resourcesByCode.get('CC')),
                new Consumption(1.875, GameData.resourcesByCode.get('PU')),
                new Consumption(0.1785, GameData.resourcesByCode.get('SM1'))
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
        GameData.resourcesByCode.get('EMD').buildCost = [new BuildCost(GameData.resourcesByCode.get('EC'), 3), 
            new BuildCost(GameData.resourcesByCode.get('IGW'), 5), new BuildCost(GameData.resourcesByCode.get('IROPL'), 10)];
        GameData.resourcesByCode.get('STOFUR').buildCost = [new BuildCost(GameData.resourcesByCode.get('STO'), 5)];
        GameData.resourcesByCode.get('ELECFUR').buildCost = [new BuildCost(GameData.resourcesByCode.get('ADVC'), 5),
            new BuildCost(GameData.resourcesByCode.get('STEPL'), 10), new BuildCost(GameData.resourcesByCode.get('STOBR'), 10)];
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
        GameData.resourcesByCode.get('SM2').buildCost = [new BuildCost(GameData.resourcesByCode.get('SM1'), 4), 
            new BuildCost(GameData.resourcesByCode.get('ADVC'), 5), 
            new BuildCost(GameData.resourcesByCode.get('PU'), 5)];
        GameData.resourcesByCode.get('SM3').buildCost = [new BuildCost(GameData.resourcesByCode.get('SM2'), 5), 
            new BuildCost(GameData.resourcesByCode.get('ADVC'), 5), 
            new BuildCost(GameData.resourcesByCode.get('PU'), 5)];
        GameData.resourcesByCode.get('PM1').buildCost = [new BuildCost(GameData.resourcesByCode.get('ADVC'), 5), 
            new BuildCost(GameData.resourcesByCode.get('EC'), 5)];
        GameData.resourcesByCode.get('PM2').buildCost = [new BuildCost(GameData.resourcesByCode.get('PM1'), 4), 
            new BuildCost(GameData.resourcesByCode.get('ADVC'), 5), 
            new BuildCost(GameData.resourcesByCode.get('PU'), 5)];
        GameData.resourcesByCode.get('PM3').buildCost = [new BuildCost(GameData.resourcesByCode.get('PM2'), 5), 
            new BuildCost(GameData.resourcesByCode.get('ADVC'), 5), 
            new BuildCost(GameData.resourcesByCode.get('PU'), 5)];
        GameData.resourcesByCode.get('ROCFUEL').buildCost = [new BuildCost(GameData.resourcesByCode.get('SOLFUEL'), 10)];
        GameData.resourcesByCode.get('ENGU').buildCost = [new BuildCost(GameData.resourcesByCode.get('IGW'), 1), 
            new BuildCost(GameData.resourcesByCode.get('PIPE'), 2), new BuildCost(GameData.resourcesByCode.get('STEPL'), 1)];
        GameData.resourcesByCode.get('RADAR').buildCost = [new BuildCost(GameData.resourcesByCode.get('EC'), 5), 
            new BuildCost(GameData.resourcesByCode.get('IGW'), 5), new BuildCost(GameData.resourcesByCode.get('IROPL'), 10)];
        GameData.resourcesByCode.get('ACCU').buildCost = [new BuildCost(GameData.resourcesByCode.get('BAT'), 5), 
            new BuildCost(GameData.resourcesByCode.get('IROPL'), 2)];
        GameData.resourcesByCode.get('LDS').buildCost = [new BuildCost(GameData.resourcesByCode.get('COPPL'), 5), 
            new BuildCost(GameData.resourcesByCode.get('PLASBAR'), 5), new BuildCost(GameData.resourcesByCode.get('STEPL'), 10)];
        GameData.resourcesByCode.get('SAT').buildCost = [new BuildCost(GameData.resourcesByCode.get('ACCU'), 100), 
            new BuildCost(GameData.resourcesByCode.get('LDS'), 100), new BuildCost(GameData.resourcesByCode.get('PU'), 100),
            new BuildCost(GameData.resourcesByCode.get('RADAR'), 5), new BuildCost(GameData.resourcesByCode.get('ROCFUEL'), 50),
            new BuildCost(GameData.resourcesByCode.get('SOLPAN'), 100)];
        GameData.resourcesByCode.get('RCU').buildCost = [new BuildCost(GameData.resourcesByCode.get('PU'), 1), 
            new BuildCost(GameData.resourcesByCode.get('SM1'), 1)];
        GameData.resourcesByCode.get('RP').buildCost = [new BuildCost(GameData.resourcesByCode.get('LDS'), 10), 
            new BuildCost(GameData.resourcesByCode.get('RCU'), 10), new BuildCost(GameData.resourcesByCode.get('ROCFUEL'), 10)];
        GameData.resourcesByCode.get('INS').buildCost = [new BuildCost(GameData.resourcesByCode.get('EC'), 1), 
            new BuildCost(GameData.resourcesByCode.get('IGW'), 1), new BuildCost(GameData.resourcesByCode.get('IROPL'), 1)];
        GameData.resourcesByCode.get('TB').buildCost = [new BuildCost(GameData.resourcesByCode.get('IGW'), 1), 
            new BuildCost(GameData.resourcesByCode.get('IROPL'), 1)];
        GameData.resourcesByCode.get('GRE').buildCost = [new BuildCost(GameData.resourcesByCode.get('COAL'), 10), 
            new BuildCost(GameData.resourcesByCode.get('IROPL'), 5)];
        GameData.resourcesByCode.get('GUNTUR').buildCost = [new BuildCost(GameData.resourcesByCode.get('COPPL'), 10), 
            new BuildCost(GameData.resourcesByCode.get('IGW'), 10), new BuildCost(GameData.resourcesByCode.get('IROPL'), 20)];
        GameData.resourcesByCode.get('FAM').buildCost = [new BuildCost(GameData.resourcesByCode.get('IROPL'), 4)];
        GameData.resourcesByCode.get('PRM').buildCost = [new BuildCost(GameData.resourcesByCode.get('COPPL'), 5),
            new BuildCost(GameData.resourcesByCode.get('FAM'), 1), new BuildCost(GameData.resourcesByCode.get('STEPL'), 1)];
        GameData.resourcesByCode.get('SP1').buildCost = [new BuildCost(GameData.resourcesByCode.get('COPPL'), 1), 
            new BuildCost(GameData.resourcesByCode.get('IGW'), 1)];
        GameData.resourcesByCode.get('SP2').buildCost = [new BuildCost(GameData.resourcesByCode.get('INS'), 1), 
            new BuildCost(GameData.resourcesByCode.get('TB'), 1)];
        GameData.resourcesByCode.get('SP3').buildCost = [new BuildCost(GameData.resourcesByCode.get('ADVC'), 1), 
            new BuildCost(GameData.resourcesByCode.get('EMD'), 1), new BuildCost(GameData.resourcesByCode.get('ENGU'), 1)];
        GameData.resourcesByCode.get('SP4').buildCost = [new BuildCost(GameData.resourcesByCode.get('GRE'), 1), 
            new BuildCost(GameData.resourcesByCode.get('GUNTUR'), 1), new BuildCost(GameData.resourcesByCode.get('PRM'), 1)];
        GameData.resourcesByCode.get('SP5').buildCost = [new BuildCost(GameData.resourcesByCode.get('EENGU'), 1), 
            new BuildCost(GameData.resourcesByCode.get('ELECFUR'), 1)];
        GameData.resourcesByCode.get('SP6').buildCost = [new BuildCost(GameData.resourcesByCode.get('BAT'), 1), 
            new BuildCost(GameData.resourcesByCode.get('CC'), 30), new BuildCost(GameData.resourcesByCode.get('PU'), 3),
            new BuildCost(GameData.resourcesByCode.get('SM1'), 1)];

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
            new CraftingItem('RS', 'Rocket silo', 'assets/icons/rocket-silo.png', [], [], 'SMELTING'),
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
        GameData.craftingsByCode.get('RS').consumme = [new Consumption(4000, GameData.resourcesByCode.get('ELEC'))];

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
        GameData.craftingsByCode.get('ELECFUR').buildCost = [
            new BuildCost(GameData.resourcesByCode.get('ADVC'), 5), 
            new BuildCost(GameData.resourcesByCode.get('STEPL'), 10), 
            new BuildCost(GameData.resourcesByCode.get('STOBR'), 10), 
        ];
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
        GameData.craftingsByCode.get('RS').buildCost = [
            new BuildCost(GameData.resourcesByCode.get('CONC'), 1000), 
            new BuildCost(GameData.resourcesByCode.get('EENGU'), 100), 
            new BuildCost(GameData.resourcesByCode.get('PIPE'), 100),
            new BuildCost(GameData.resourcesByCode.get('PU'), 100),
            new BuildCost(GameData.resourcesByCode.get('STEPL'), 1000)
        ];
    }

}

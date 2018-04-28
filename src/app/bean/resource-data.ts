import { ResourceItem } from "./resource-item";
import { resource } from "selenium-webdriver/http";

export class ResourceData {

    public static resources:ResourceItem[] = [
        new ResourceItem(1, 'ELEC','Electricity', 'assets/icons/resources/electricity-icon-red.png', 0, false, 0),
        new ResourceItem(2, 'COAL', 'Coal', 'assets/icons/resources/coal.png', 1, true, 1.25),
        new ResourceItem(3, 'IRONO','Iron Ore', 'assets/icons/resources/iron-ore.png', 2, true, 1.25),
        new ResourceItem(4, 'COPO', 'Copper Ore', 'assets/icons/resources/copper-ore.png', 3, true, 1.25),
        new ResourceItem(5, 'STO', 'Stone', 'assets/icons/resources/stone.png', 4, true, 1),
        new ResourceItem(6, 'IROPL', 'Iron plate', 'assets/icons/iron-plate.png', 5, false, 0),
        new ResourceItem(6, 'COPPL', 'Copper plate', 'assets/icons/copper-plate.png', 5, false, 0),
        new ResourceItem(6, 'STEPL', 'Steel plate', 'assets/icons/steel-plate.png', 5, false, 0),
    ];

    public static resourcesByCode:Map<string, ResourceItem> = new Map(ResourceData.resources.map((resource) : [string, ResourceItem] => [resource.code, resource]));

}

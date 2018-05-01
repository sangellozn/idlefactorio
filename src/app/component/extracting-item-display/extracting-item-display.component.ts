import { Component, OnInit, Input } from '@angular/core';
import { ResourceItem } from '../../bean/resource-item';
import { GameData } from '../../bean/game-data';
import { CraftingItem } from '../../bean/crafting-item';
import { ProductionInfo, ProductionQty } from '../../bean/production-info';
import { Game } from '../../bean/game';
import { Consumption } from '../../bean/consumption';

@Component({
  selector: 'app-extracting-item-display',
  templateUrl: './extracting-item-display.component.html',
  styleUrls: ['./extracting-item-display.component.css']
})
export class ExtractingItemDisplayComponent implements OnInit {

  @Input() private extractingInfo:ProductionInfo;
  private game:Game;

  constructor() {
    this.game = Game.getInstance();
  }

  ngOnInit() { }

  build(productionQty:ProductionQty) {
    if (this.game.canBuildConsumption(this.extractingInfo.resource, productionQty.recipe.craftingItem)) {
      this.game.buildCraftingItem(this.extractingInfo.resource, productionQty.recipe.craftingItem);
    }
  }

  destruct(productionQty:ProductionQty) {
    if (productionQty.nbBuild > 0) {
      this.game.destructCraftingItem(this.extractingInfo.resource, productionQty.recipe.craftingItem);
    }
    return false;
  }

  getConsummeUnion(productionQty:ProductionQty): Consumption[] {
    return [].concat(productionQty.recipe.consume).concat(productionQty.recipe.craftingItem.consumme);
  }

}

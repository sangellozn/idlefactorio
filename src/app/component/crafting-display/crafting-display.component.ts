import { Component, OnInit } from '@angular/core';
import { ProductionInfo } from '../../bean/production-info';
import { Game } from '../../bean/game';

@Component({
  selector: 'app-crafting-display',
  templateUrl: './crafting-display.component.html',
  styleUrls: ['./crafting-display.component.css']
})
export class CraftingDisplayComponent implements OnInit {

  public craftingItems:ProductionInfo[];

  constructor() { }

  ngOnInit() {
    this.craftingItems = Game.getInstance().getCraftingItems();
  }

}

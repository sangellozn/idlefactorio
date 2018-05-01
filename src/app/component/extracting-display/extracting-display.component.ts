import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Game } from '../../bean/game';
import { CraftingItem } from '../../bean/crafting-item';
import { GameData } from '../../bean/game-data';
import { ProductionInfo } from '../../bean/production-info';

@Component({
  selector: 'app-extracting-display',
  templateUrl: './extracting-display.component.html',
  styleUrls: ['./extracting-display.component.css']
})
export class ExtractingDisplayComponent implements OnInit {

  public extractingItems:ProductionInfo[];

  constructor() { }

   ngOnInit() {
    this.extractingItems = Game.getInstance().getExtractingItems();
  }

}

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Game } from '../../bean/game';
import { CraftingItem } from '../../bean/crafting-item';
import { CraftingData } from '../../bean/crafting-data';

@Component({
  selector: 'app-extracting-display',
  templateUrl: './extracting-display.component.html',
  styleUrls: ['./extracting-display.component.css']
})
export class ExtractingDisplayComponent implements OnInit {

  private extractingItems:object;
  private extractingItemsKeys:string[];

  constructor() { }

  resetData() {
    this.extractingItems = {};
    this.extractingItemsKeys = [];
  }

  ngOnInit() {
    /*new Observable<Map<string, number>>((observer) => {
      let intervalId = window.setInterval(() => observer.next(Game.getInstance().getExtractingItems()), Game.roundDuration);
      return {unsubscribe: () => { window.clearInterval(intervalId)}};
    }).subscribe(data => this.buildExtractingItems(data));*/
    this.buildExtractingItems(Game.getInstance().getExtractingItems());
  }

  buildExtractingItems(data:Map<string, number>) {
    this.resetData();

    data.forEach((value, key) => {
      let ci:CraftingItem = CraftingData.craftingsByCode.get(key);

      if (!this.extractingItems[ci.categorie]) {
        this.extractingItems[ci.categorie] = [];
        this.extractingItemsKeys.push(ci.categorie);
      }

      this.extractingItems[ci.categorie].push({
        craftingItem : ci,
        qty: value
      });
    });
  }

}

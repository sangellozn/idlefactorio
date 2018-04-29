import { Component, OnInit } from '@angular/core';
import { ProductionInfo } from '../../bean/production-info';
import { Game } from '../../bean/game';

@Component({
  selector: 'app-furnace-display',
  templateUrl: './furnace-display.component.html',
  styleUrls: ['./furnace-display.component.css']
})
export class FurnaceDisplayComponent implements OnInit {

  private furnacingItems:ProductionInfo[];

  constructor() { }

  ngOnInit() {
    this.furnacingItems = Game.getInstance().getSmeltingItems();
  }

}

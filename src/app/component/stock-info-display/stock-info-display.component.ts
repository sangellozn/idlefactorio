import { Component, OnInit, Input } from '@angular/core';
import { ResourceItem } from '../../bean/resource-item';
import { Game } from '../../bean/game';
import { NumberSymbol } from '@angular/common';

@Component({
  selector: 'app-stock-info-display',
  templateUrl: './stock-info-display.component.html',
  styleUrls: ['./stock-info-display.component.css']
})
export class StockInfoDisplayComponent implements OnInit {

  @Input() public resource:ResourceItem;
  @Input() public stock:number;
  @Input() public producing:number;
  @Input() public consuming:number;
  private mineId:number = undefined;
  private progressBarId:number;
  private progressBarWidth:number;
  private progressBarStep:number;

  constructor() {  }

  ngOnInit() { 
    this.initProgressBarInfo();
  }

  initProgressBarInfo() {
    this.progressBarWidth = 0;
    this.progressBarStep = 0;
    this.progressBarId = undefined;
  }

  mineResource() {
    if (this.resource.canBeMined && !this.mineId && !this.progressBarId) {
      this.displayProgressBar();
      this.mineId = window.setTimeout(() => {
        Game.getInstance().increaseStock(this.resource, 1);
        this.mineId = undefined;
      }, this.resource.mineDuration * 1000);
    }
  }

  displayProgressBar() {
    this.progressBarId = window.setInterval(() => {
      if (this.progressBarStep === 10) {
        window.clearInterval(this.progressBarId);
        this.initProgressBarInfo();
      } else {
        this.progressBarStep++;
        this.progressBarWidth = (this.progressBarStep) * 10;
      }
    }, this.resource.mineDuration * 100);
  }

}

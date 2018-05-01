import { Component, OnInit } from '@angular/core';
import { StockInfo } from '../../bean/stock-info';
import { Observable } from 'rxjs/Observable';
import { Game } from '../../bean/game';

@Component({
  selector: 'app-production-display',
  templateUrl: './production-display.component.html',
  styleUrls: ['./production-display.component.css']
})
export class ProductionDisplayComponent implements OnInit {

  private stockInfos:StockInfo[] = [];

  constructor() { }

  ngOnInit() {
    this.stockInfos = Game.getInstance().getStockInfos();
  }

}

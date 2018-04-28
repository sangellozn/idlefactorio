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
    /*new Observable<StockInfo[]>((observer) => {
      let intervalId = window.setInterval(() => observer.next(Game.getInstance().getStockInfos()), Game.roundDuration);
      return {unsubscribe: () => { window.clearInterval(intervalId)}};
    }).subscribe(data => this.stockInfos = data);*/
    this.stockInfos = Game.getInstance().getStockInfos();
  }

}

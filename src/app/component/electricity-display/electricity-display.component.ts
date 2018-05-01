import { Component, OnInit } from '@angular/core';
import { Game } from '../../bean/game';
import { ProductionInfo } from '../../bean/production-info';

@Component({
  selector: 'app-electricity-display',
  templateUrl: './electricity-display.component.html',
  styleUrls: ['./electricity-display.component.css']
})
export class ElectricityDisplayComponent implements OnInit {

  private game:Game;
  private powering:ProductionInfo;

  constructor() {
    this.game = Game.getInstance();
  }

  ngOnInit() {
    this.powering = this.game.getElectricityItem();
  }

}

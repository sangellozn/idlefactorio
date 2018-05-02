import { Component, OnInit } from '@angular/core';
import { ResearchItem } from '../../bean/research-item';
import { Game } from '../../bean/game';
import { ResourceItem } from '../../bean/resource-item';
import { StockInfo } from '../../bean/stock-info';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.css']
})
export class ResearchComponent implements OnInit {

  public game:Game;
  public researchItems:ResearchItem[];
  public sciencePacks:StockInfo[];

  constructor() { 
    this.game = Game.getInstance();
  }

  ngOnInit() {
    this.researchItems = this.game.getResearchItems();
    this.sciencePacks = this.game.getSciencePackItems();
  }

}

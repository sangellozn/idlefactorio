import { Component, OnInit, Input } from '@angular/core';
import { ResearchItem } from '../../bean/research-item';
import { Game } from '../../bean/game';

@Component({
  selector: 'app-research-item',
  templateUrl: './research-item.component.html',
  styleUrls: ['./research-item.component.css']
})
export class ResearchItemComponent implements OnInit {

  @Input() public researchItem:ResearchItem;
  public game:Game;

  constructor() {
    this.game = Game.getInstance();
  }

  ngOnInit() {
  }

  search() {
    if (this.game.canSearch(this.researchItem)) {
      this.game.search(this.researchItem);
    }
  }

}

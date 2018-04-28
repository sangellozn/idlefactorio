import { Component, OnInit, Input } from '@angular/core';
import { ResourceItem } from '../../bean/resource-item';
import { ResourceData } from '../../bean/resource-data';
import { CraftingItem } from '../../bean/crafting-item';

@Component({
  selector: 'app-extracting-item-display',
  templateUrl: './extracting-item-display.component.html',
  styleUrls: ['./extracting-item-display.component.css']
})
export class ExtractingItemDisplayComponent implements OnInit {

  @Input() private category:string;
  @Input() private extractingItems:object[];
  private categoryResource:ResourceItem;

  constructor() { }

  ngOnInit() {
    this.categoryResource = ResourceData.resourcesByCode.get(this.category);
  }

}

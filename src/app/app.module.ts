import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { GameComponent } from './component/game/game.component';
import { ProductionDisplayComponent } from './component/production-display/production-display.component';
import { CraftingDisplayComponent } from './component/crafting-display/crafting-display.component';
import { StockInfoDisplayComponent } from './component/stock-info-display/stock-info-display.component';
import { ExtractingDisplayComponent } from './component/extracting-display/extracting-display.component';
import { ExtractingItemDisplayComponent } from './component/extracting-item-display/extracting-item-display.component';
import { FurnaceDisplayComponent } from './component/furnace-display/furnace-display.component';


@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    ProductionDisplayComponent,
    CraftingDisplayComponent,
    StockInfoDisplayComponent,
    ExtractingDisplayComponent,
    ExtractingItemDisplayComponent,
    FurnaceDisplayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

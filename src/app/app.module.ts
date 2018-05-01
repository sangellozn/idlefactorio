import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { GameComponent } from './component/game/game.component';
import { ProductionDisplayComponent } from './component/production-display/production-display.component';
import { CraftingDisplayComponent } from './component/crafting-display/crafting-display.component';
import { StockInfoDisplayComponent } from './component/stock-info-display/stock-info-display.component';
import { ExtractingDisplayComponent } from './component/extracting-display/extracting-display.component';
import { ExtractingItemDisplayComponent } from './component/extracting-item-display/extracting-item-display.component';
import { FurnaceDisplayComponent } from './component/furnace-display/furnace-display.component';
import { ElectricityDisplayComponent } from './component/electricity-display/electricity-display.component';


@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    ProductionDisplayComponent,
    CraftingDisplayComponent,
    StockInfoDisplayComponent,
    ExtractingDisplayComponent,
    ExtractingItemDisplayComponent,
    FurnaceDisplayComponent,
    ElectricityDisplayComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { GameComponent } from './component/game/game.component';
import { HelpComponent } from './component/help/help.component';
import { ResearchComponent } from './component/research/research.component';
import { CreditsComponent } from './component/credits/credits.component';
import { AchivementsComponent } from './component/achivements/achivements.component';

const routes: Routes = [
  {path: '', redirectTo: 'game', pathMatch: 'full'},
  {path: 'game', component: GameComponent},
  {path: 'help', component: HelpComponent},
  {path: 'research', component: ResearchComponent},
  {path: 'credits', component: CreditsComponent},
  {path: 'achivements', component: AchivementsComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }

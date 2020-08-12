import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MissionsComponent } from './mission/components/missions/missions.component';

const routes: Routes = [
  {
    path:'',
    component:MissionsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

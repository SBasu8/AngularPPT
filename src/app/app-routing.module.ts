import { LearningsComponent } from './Components/learnings/learnings.component';
import { HomeComponent } from './Components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroComponent } from './Components/intro/intro.component';

const routes: Routes = 
[
 {path:"",component: IntroComponent},
 {path:"athome",component: HomeComponent},
 {path:"learnings",component: LearningsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

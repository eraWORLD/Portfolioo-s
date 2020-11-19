import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainLayoutComponent} from "./shared/components/main-layout/main-layout.component";
import {IntroComponent} from "./shared/components/intro/intro.component";

const routes: Routes = [
  {
    path: '', component:MainLayoutComponent, children:[
      {path: '', redirectTo: '/', pathMatch: 'full'},
      {path: '', component: IntroComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

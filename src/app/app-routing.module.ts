import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainLayoutComponent} from "./shared/components/main-layout/main-layout.component";
import {IntroComponent} from "./shared/components/intro/intro.component";
import {WorksComponent} from "./shared/components/works/works.component";

const routes: Routes = [
  {
    path: '', component:MainLayoutComponent, children:[
      {path: '', redirectTo: '/', pathMatch: 'full'},
      {path: '', component: WorksComponent},
      // {path: '', component: IntroComponent},
      // {path: '', component: IntroComponent},
      // {path: '', component: IntroComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{anchorScrolling:'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

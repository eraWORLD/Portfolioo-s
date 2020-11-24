import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {MainLayoutComponent} from "./shared/components/main-layout/main-layout.component";
import {IntroComponent} from "./shared/components/intro/intro.component";
import {WorksComponent} from "./shared/components/works/works.component";
import {AboutMeComponent} from "./shared/components/about-me/about-me.component";

const routes: Routes = [
  {
    path: '', component:MainLayoutComponent, children:[
      {path: '', redirectTo: '/', pathMatch: 'full'},
      {path: '', component: IntroComponent},
      {path: 'work', component:WorksComponent},
      {path: 'aboutMe', component: AboutMeComponent},

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

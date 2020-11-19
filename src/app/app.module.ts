import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroComponent } from './shared/components/intro/intro.component';
import {MainLayoutComponent} from "./shared/components/main-layout/main-layout.component";
import { WorksComponent } from './shared/components/works/works.component';
import { AboutMeComponent } from './shared/components/about-me/about-me.component';
import { ReviewsComponent } from './shared/components/reviews/reviews.component';
import { NewsComponent } from './shared/components/news/news.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ModalComponent } from './shared/components/modal/modal.component';
import { ResumeComponent } from './shared/components/resume/resume.component';
import { TalkComponent } from './shared/components/talk/talk.component';
import {SearchPipe} from "./shared/search.pipe";


@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    MainLayoutComponent,
    WorksComponent,
    AboutMeComponent,
    ReviewsComponent,
    NewsComponent,
    FooterComponent,
    ModalComponent,
    ResumeComponent,
    TalkComponent,
    SearchPipe,
    SearchPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import {MainLayoutComponent} from "../main-layout/main-layout.component";

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  constructor(public mainComponent:MainLayoutComponent) { }

  ngOnInit(): void {
  }

  hereMe($event) {
    this.mainComponent.hereMe()
  }

  resume() {
    this.mainComponent.resume()
  }
}

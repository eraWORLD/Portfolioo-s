import { Component, OnInit } from '@angular/core';
import {MainLayoutComponent} from "../main-layout/main-layout.component";

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  constructor( public mainLayout: MainLayoutComponent) { }

  ngOnInit(): void {
  }

  hereMe($event: MouseEvent) {
    this.mainLayout.hereMe($event)
  }

  resume() {
    this.mainLayout.resume()
  }
}

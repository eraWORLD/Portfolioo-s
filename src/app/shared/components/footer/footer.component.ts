import { Component, OnInit } from '@angular/core';
import {MainLayoutComponent} from "../main-layout/main-layout.component";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(public mainComponent: MainLayoutComponent) { }

  ngOnInit(): void {
  }


  hereMe($event: MouseEvent) {
    this.mainComponent.hereMe()
  }
}

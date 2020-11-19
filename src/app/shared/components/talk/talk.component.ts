import { Component, OnInit } from '@angular/core';
import {MainLayoutComponent} from "../main-layout/main-layout.component";

@Component({
  selector: 'app-talk',
  templateUrl: './talk.component.html',
  styleUrls: ['./talk.component.scss']
})
export class TalkComponent implements OnInit {


  constructor( public mainComponent: MainLayoutComponent) { }

  ngOnInit(): void {
  }
  closeTalk(){
  this.mainComponent.hereMe()
}
}

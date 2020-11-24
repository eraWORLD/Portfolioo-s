import { Component, OnInit } from '@angular/core';
import {MainLayoutComponent} from "../main-layout/main-layout.component";

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  constructor(private mainLayoutComponent: MainLayoutComponent) { }

  ngOnInit(): void {
  }

  clouseResume() {
    this.mainLayoutComponent.clouseResume();
  }
  stopPropagation($event){
    $event.stopPropagation()
  }

  hereMe($event: MouseEvent) {
      this.mainLayoutComponent.hereMe($event)
  }
}

import { Component, OnInit } from '@angular/core';

import {getIifeBody} from "@angular/compiler-cli/ngcc/src/host/esm2015_host";
import {getHtmlTransforms} from "@angular-devkit/build-angular/src/utils/index-file/transforms";



@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent {
  constructor() { }
  boolResume:boolean = false;
  boolHereME: boolean = false;


  resume () {
    this.boolResume = !this.boolResume;
  }
  hereMe($event?) {

    this.boolHereME = !this.boolHereME;
    $event.preventDefault()

  }
  public clouseResume(){
    this.boolResume = !this.boolResume;

  }

}

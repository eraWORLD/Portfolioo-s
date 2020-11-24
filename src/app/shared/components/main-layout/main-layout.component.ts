import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent {
  constructor() { }
  boolResume:boolean = false;
  boolHereME: boolean = false;
  openWorkBool: boolean = false;
  navBool: boolean = false;


  resume () {
    this.boolResume = !this.boolResume;
  }
  hereMe($event?) {

    this.boolHereME = !this.boolHereME;
    $event.preventDefault()

  }

   clouseResume () {
    this.boolResume = !this.boolResume;
  }

  openWork() {
    this.openWorkBool = !this.openWorkBool
  }

  openNav() {
    this.navBool = !this.navBool

  }

  Event($event: MouseEvent) {
    $event.preventDefault()
    document.getElementById('top').scrollIntoView({behavior:"smooth",block:"start"})

  }
  // EventA($event: MouseEvent) {
  //   $event.preventDefault()
  //   document.getElementById('idAbout').scrollIntoView({behavior:"smooth",block:"start"})
  //
  // }
  // EventB($event: MouseEvent) {
  //   $event.preventDefault()
  //   document.getElementById('idWork').scrollIntoView({behavior:"smooth",block:"start"})
  //
  // }


}

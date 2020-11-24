import { Component, OnInit } from '@angular/core';
import {MainLayoutComponent} from "../main-layout/main-layout.component";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-talk',
  templateUrl: './talk.component.html',
  styleUrls: ['./talk.component.scss']
})
export class TalkComponent implements OnInit {

   form: FormGroup;

  constructor( public mainComponent: MainLayoutComponent) { }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(null, [
        Validators.required, Validators.email
      ]),
      text: new FormControl(null, [
        Validators.required, Validators.minLength(10)
      ]),
    });
  }

  closeTalk () {
  this.mainComponent.hereMe()
}
  stopPropagation($event) {
    $event.stopPropagation()
  }

  submit() {
  }
}

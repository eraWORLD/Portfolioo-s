import {Component, OnInit, ViewChild} from '@angular/core';
import {MainLayoutComponent} from "../main-layout/main-layout.component";


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  images = [
     { path:"https://www.ixbt.com/img/x780/n1/news/2020/10/0/ios-15-supported-devices-cover.jpg"},
     {path:"https://www.ixbt.com/img/x780/n1/news/2020/10/0/ios-15-supported-devices-cover.jpg"},
     {path:"https://www.ixbt.com/img/x780/n1/news/2020/10/3/i474xAsWCGbsjvpZqzDHee_large_large.png"},
  ]


  constructor(public mainComponent: MainLayoutComponent) { }
  @ViewChild('myCarousel', {static: false}) myCarousel;

  next() {
    this.myCarousel.next()
  }
  prev() {
    this.myCarousel.prev();
  }

  ngOnInit(): void {
  }


  closeModal() {
    this.mainComponent.openWork()
  }

  stopPropagation($event: MouseEvent) {
    $event.stopPropagation()

  }

}


// posts2:Post = {
//    id: 4,
//    img: [] =[

//    ],
//    cat: 'app',
//    title: 'Project title',
//    date: new Date,
//   client: 'Stallfao stydio'
//  }

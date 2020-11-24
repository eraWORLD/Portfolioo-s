import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Observable} from "rxjs";
import {SearchPipe} from "../../search.pipe";
import {MainLayoutComponent} from "../main-layout/main-layout.component";

export interface Post {
  img: any,
  id: number,
  title: string,
  cat: string,
  date: Date,
  text?:string,
  client?:string,

}


@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {
  searchCat: string;

  constructor( public mainComponent: MainLayoutComponent) { }
 posts: Post[]= [
    {
      id: 1,
      img: "https://www.ixbt.com/img/x780/n1/news/2020/10/0/ios-15-supported-devices-cover.jpg",
      cat: 'app',
      title: 'Project title',
      date:new Date,
    },

    {
      id: 2,
      img: "https://www.ixbt.com/img/x780/n1/news/2020/10/0/ios-15-supported-devices-cover.jpg",
      cat: 'interaction',
      title: 'Project title',
      date:new Date,
    },
    {
      id: 3,
      img: "https://www.ixbt.com/img/x780/n1/news/2020/10/3/i474xAsWCGbsjvpZqzDHee_large_large.png",
      cat: 'websites',
      title: 'Project title',
      date:new Date,
    },
    {
      id: 4,
      img: "https://via.placeholder.com/500x300",
      cat: 'websites',
      title: 'Project title',
      date:new Date,
    },
    {
      id: 5,
      img: "https://via.placeholder.com/500x300",
      cat: 'interaction',
      title: 'Project title',
      date:new Date,
    },
    {
      id: 6,
      img: "https://via.placeholder.com/500x300",
      cat: 'app',
      title: 'Project title',
      date:new Date,
    },


]

 //  posts3:Post = {
 //    id: 43,
 //    img: [] =[
 //
 //      {path: "https://via.placeholder.com/800x800"},
 //      {path: "https://via.placeholder.com/800x800"},
 //    ],
 //    cat: 'websites',
 //    title: 'Project title',
 //    date: new Date,
 //   client: 'Stallfao stydio'
 //  }
 //  posts4:Post = {
 //    id: 48,
 //    img: [] =[
 //
 //      {path: "https://via.placeholder.com/800x800"},
 //      {path: "https://via.placeholder.com/800x800"},
 //  ],
 //    cat: 'app',
 //    title: 'Project title',
 //    date: new Date,
 //   client: 'Stallfao stydio'
 //  }





  // @Output() filter = new EventEmitter<any>()
  hBool: boolean = false;

  ngOnInit(): void {

  }


  searchAll($event) {
    this.searchCat = ''
    $event.preventDefault()
  }

  searchApp($event) {
    this.searchCat = 'app'
    $event.preventDefault()
  }

  searchWebsites($event) {
    this.searchCat = 'websites'
    $event.preventDefault()


  }

  searchInteraction($event) {
    this.searchCat = 'interaction'
    $event.preventDefault()
  }


  Iv($event: MouseEvent) {

  }

  openWork($event) {
    this.mainComponent.openWork()
    this.Iv($event)
    console.log($event)

  }
}

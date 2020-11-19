import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Observable} from "rxjs";
import {Url} from "url";
import {SearchPipe} from "../../search.pipe";

export interface Post {
  img: string,
  id: number,
  title: string,
  cat: string,
  date: Date,
}


@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {
  searchCat: string;

  constructor() { }
 posts: Post[]= [
    {
      id: 1,
      img: "https://via.placeholder.com/370x300",
      cat: 'app',
      title: 'Project title',
      date:new Date,
    },

    {
      id: 2,
      img: "https://via.placeholder.com/370x300",
      cat: 'app',
      title: 'Project title',
      date:new Date,
    },
    {
      id: 3,
      img: "https://via.placeholder.com/370x300",
      cat: 'websites',
      title: 'Project title',
      date:new Date,
    },
    {
      id: 4,
      img: "https://via.placeholder.com/370x300",
      cat: 'websites',
      title: 'Project title',
      date:new Date,
    },
    {
      id: 5,
      img: "https://via.placeholder.com/370x300",
      cat: 'interaction',
      title: 'Project title',
      date:new Date,
    },
    {
      id: 6,
      img: "https://via.placeholder.com/370x300",
      cat: 'interaction',
      title: 'Project title',
      date:new Date,
    },


]

  // @Output() filter = new EventEmitter<any>()

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
}

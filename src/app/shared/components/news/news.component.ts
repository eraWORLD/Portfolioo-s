import { Component, OnInit } from '@angular/core';
import {News} from "../../interfaces";


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }
    postNews: News[] = [

      {
        date: 'Nov. 22nd 2020',
        img: 'https://i2.wp.com/9to5mac.com/wp-content/uploads/sites/6/2018/08/iphone-6s.jpeg?w=1024&quality=82&strip=all&ssl=1',
        title: 'Apple to drop support for iPhone 6s',
        category: 'Apple',
        text:'A new report suggests that Apple is planning to drop support for the iPhone SE, iPhone 6s, and iPhone 6s Plus with next year’s release of iOS 15. This comes after Apple maintained compatibility with all of those devices this year with iOS 14.',
        link:'https://9to5mac.com/2020/11/22/ios-15-supported-devices-rumor/',
      },
      {
        date: 'Nov. 22nd 2020',
        img: 'https://9to5toys.com/wp-content/uploads/sites/5/2020/09/apple-watch-series-6-1.jpg?resize=1200,600',
        title: 'Black Friday pricing on Apple Watch Series 6/SE takes up to $120 off latest models',
        category: 'Apple',
        text:'Amazon has now launched Black Friday pricing on Apple Watch Series 6 with up to $120 off cellular models. Meanwhile, GPS configurations are down to $329.98, equating at least $69 off the regular going rate. Free shipping is available for all. Apple Watch SE is also on sale for Black Friday with deals from $229.99. Many of these prices are reflected at checkout after the on-page coupon is accounted for. That’s a $49 savings and a match of our previous mention.',
        link:'https://9to5toys.com/2020/11/22/apple-watch-black-friday-deals/'
      },
      {
        date: 'Nov. 22nd 2020',
        img:'https://cdn.mos.cms.futurecdn.net/W874KNYBEgFwRUJVdRqVP5-970-80.jpg.webp',
        title: 'MacBook Air vs. iPad Pro: Which is right for you?',
        category: 'Apple',
        text:'Settling the MacBook Air vs. iPad Pro debate is easier than you might thinkThe rise of the iPad has generated an interesting question: "MacBook Air or iPad Pro?" And this question has never been more topical, as Apple\'s new MacBook Air with M1 chip (which is the best MacBook bar none) sees the Mac revolutionized with more speed and endurance than ever before.',
        link:'https://www.tomsguide.com/news/macbook-air-vs-ipad-pro',
      },
  ]
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  template: `<h3>Новини</h3>`,
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

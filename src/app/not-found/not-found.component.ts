import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `<h3>Нажаль сторінку не знайдено</h3>`,
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

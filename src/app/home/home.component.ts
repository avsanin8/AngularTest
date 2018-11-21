import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `<h3>Головна</h3>`,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

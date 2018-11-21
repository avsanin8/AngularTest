import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-price',
  template: `<h3>Ціна</h3>`,
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss']
})
export class PriceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

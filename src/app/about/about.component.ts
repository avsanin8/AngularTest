import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `<h3>Про нас</h3>`,
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
  // template: `<h1> Hellow world! HA HA !!</h1>
  //           <p>My first component</p>`,
  // styles:[`h1, p{color:gray; font-size:10rem;}`]
})
export class AppComponent {
  title = 'Hellow from app.component.ts';
}

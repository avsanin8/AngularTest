import { Component } from '@angular/core';
import { MyServiceService } from './my-service.service';

import { HttpClient } from '@angular/common/http'; // GPPD 

@Component({
  selector: 'app-root',
  template: `<div>
                <h1>Angular routes</h1>
                <nav>
                  <a routerLink="">Главная страница</a>
                  <a routerLink="/About">About us</a>
                  <a routerLink="/News">News...</a>
                  <a routerLink="/Price"> Price $</a>
                <router-outlet></router-outlet>
                </nav>
            </div>`,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
  // template: `<h1> Hellow world! HA HA !!</h1>
  //           <p>My first component</p>`,
  // styles:[`h1, p{color:gray; font-size:10rem;}`]
})
export class AppComponent {
  title = 'Hellow from app.component.ts';
  userName: string = "";
  response: any;
  
  constructor(private http: HttpClient) {    

  }

  mySearch(){
    this.http.get('https://api.github.com/users/' + this.userName) // This is GET query
    .subscribe((responce)=>{
      this.response = responce;
      console.log("in mySearch this.response is: " + this.response);
    })
  }
}

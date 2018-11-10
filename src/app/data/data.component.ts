import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {
  message: string = "This component from data.component.ts" + " 1+1 = ";
  message2: string = new Date().toString();
  message3: string = new Date().toTimeString();
  curTime: string;
  items = ["Angular,", "React,", "Vue,", "Bootstrap,", "Node.js"];
  constructor() { 
    //this.message = "World" // or use constructor to init message
    setInterval(()=>{
      this.curTime = new Date().toTimeString();
    }, 1000)
  }

  ngOnInit() {
  }

}

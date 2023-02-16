import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecyclehooks',
  templateUrl: './lifecyclehooks.component.html',
  styleUrls: ['./lifecyclehooks.component.css']
})
export class LifecyclehooksComponent implements OnInit {
  inputdata!:any;
  constructor() {
    // console.log("constructor called");

   }

  ngOnInit(): void {
    // console.log("ngonit called");

  }
  handleDate(data:any){

    this.inputdata = data.target.value;
    // console.log(this.inputdata);


  }



}

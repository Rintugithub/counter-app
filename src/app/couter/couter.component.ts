import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-couter',
  templateUrl: './couter.component.html',
  styleUrls: ['./couter.component.css']
})
export class CouterComponent implements OnInit {
   count:number=0;

  constructor() { }

  ngOnInit(): void {
    // console.log(this.count);


  }
  increment(){
    this.count++;
  }
  decrement(){
    this.count--;
   }
  reset(){
   this.count =0;
   }
   add(value: any){
    this.count = this.count+value.v1+value.v2;
  


   }

}

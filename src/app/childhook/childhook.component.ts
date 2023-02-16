import { Component, OnChanges, OnInit, SimpleChanges, Input, DoCheck } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-childhook',
  templateUrl: './childhook.component.html',
  styleUrls: ['./childhook.component.css']
})
export class ChildhookComponent implements OnInit,OnChanges,DoCheck {
@Input()parentdata:any;
@Input()productdata!:Product;

  constructor() {
    console.log("constructor called");

   }
  ngDoCheck(): void {
    console.log("ng do check",this.productdata);

  }

  ngOnInit(): void {
    console.log("ngonit called");

  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngonchanges called",changes);

  }



}

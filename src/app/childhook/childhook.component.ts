import { Component, OnChanges, OnInit, SimpleChanges, Input, DoCheck, AfterContentInit, ContentChild, ElementRef, AfterContentChecked } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-childhook',
  templateUrl: './childhook.component.html',
  styleUrls: ['./childhook.component.css']
})
export class ChildhookComponent implements OnInit,OnChanges,DoCheck,
 AfterContentInit,AfterContentChecked{
@Input()parentdata:any;
@Input()productdata!:Product;
@ContentChild("child")childdata!:ElementRef;

  constructor() {
    console.log("constructor called");

   }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked");

    this.childdata.nativeElement.setAttribute("style",`color:${this.parentdata}`)
  }
  ngAfterContentInit(): void {
    console.log("ng after content int",this.childdata);
    // this.childdata.nativeElement.setAttribute("style",`color:${this.parentdata}`)

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

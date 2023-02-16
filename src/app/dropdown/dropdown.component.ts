import { Component, ElementRef, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  // value:string="";
  colours:string[]=["red","green","blue","orange","yellow","lightgreen","lightblue"];
  colourval:any;
  @ViewChild("col")marker!:ElementRef<any>;
  constructor() { }
  ngOnInit(): void {
  }
  changebg(color:any){
    // console.log((color.target as HTMLInputElement).value);
    // this.colourval= (color.target as HTMLInputElement).value;
    // this.marker.nativeElement.style.backgroundColor = this.colourval;
    console.log(color);
    this.colourval= color;
    this.marker.nativeElement.style.backgroundColor = this.colourval;


  }




}

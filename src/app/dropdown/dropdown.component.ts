import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  @ViewChild('colour') myElement!: HTMLElement;
   value:any;
  constructor() { }
  ngOnInit(): void {
  }

  changeBg(value:any){
  console.log(value);

  }


}

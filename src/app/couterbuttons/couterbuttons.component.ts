import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CouterComponent } from '../couter/couter.component';

@Component({
  selector: 'app-couterbuttons',
  templateUrl: './couterbuttons.component.html',
  styleUrls: ['./couterbuttons.component.css']
})
export class CouterbuttonsComponent implements OnInit {
  @Output() newItemEventInc = new EventEmitter<string>();
  @Output() newItemEventDec = new EventEmitter<string>();
  @Output() newItemEventRes = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {

  }
 increment(){
  this.newItemEventInc.emit();
  }
  decrement(){
    this.newItemEventDec.emit();

   }
   reset(){
    this.newItemEventRes.emit();

   }

}

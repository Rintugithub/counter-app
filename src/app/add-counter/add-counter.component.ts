import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-counter',
  templateUrl: './add-counter.component.html',
  styleUrls: ['./add-counter.component.css']
})
export class AddCounterComponent implements OnInit {
 public value!:number;
 public value1!:number;

 @Output() newItemEventAdd = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  add(){
    console.log(this.value);
    const x = {
      v1:this.value,
      v2:this.value1
    }
    this.newItemEventAdd.emit(x);

  }


}

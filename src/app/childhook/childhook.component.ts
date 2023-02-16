import { Component, OnChanges, OnInit, SimpleChanges, Input } from '@angular/core';

@Component({
  selector: 'app-childhook',
  templateUrl: './childhook.component.html',
  styleUrls: ['./childhook.component.css']
})
export class ChildhookComponent implements OnInit,OnChanges {
@Input()parentdata:any;
  constructor() {
    console.log("constructor called");

   }

  ngOnInit(): void {
    console.log("ngonit called");
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngonchanges called",changes);
  }

}

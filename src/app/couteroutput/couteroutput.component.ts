import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-couteroutput',
  templateUrl: './couteroutput.component.html',
  styleUrls: ['./couteroutput.component.css']
})
export class CouteroutputComponent implements OnInit {
   @Input()
  countx!: number;

  constructor() { }

  ngOnInit(): void { 
  }

}

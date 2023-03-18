import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  sum!:number;
  values!:any;
  numArray:number[]=[54,76,86,87,98,54,35,74,90,54];

 activeStatus:any = 'now';
  constructor() { }

  ngOnInit(): void {
    new Observable((observer)=>{
      setTimeout(() => {
        observer.next('2 min ago')

      }, 2000);
      setTimeout(() => {
        observer.next('4 min ago')

      }, 4000);
      setTimeout(() => {
        observer.next('6 min ago')

      }, 6000);
      setTimeout(() => {
        observer.next('8 min ago')

      }, 8000);

    }).subscribe((res)=>{
      this.activeStatus = res;
    })
    this.sum = this.numArray.reduce((sum,values)=>{
       return values + sum;
    },0)
    this.values= this.numArray.map(data=>{
      return data;
    })

  }

}

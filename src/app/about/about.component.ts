import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
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
  }

}

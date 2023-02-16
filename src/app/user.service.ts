import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';





@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  getallUsers(){
    return this.http.get<any>("https://jsonplaceholder.typicode.com/users")

    // .pipe(map((res:any)=>{
    //   return res;
    // }))



  }


}

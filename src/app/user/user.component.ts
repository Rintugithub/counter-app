import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
 users:any;
  constructor(private userservice:UserService) { }

  ngOnInit(): void {

this.userservice.getallUsers().subscribe((data)=>{
  console.log(data);
  this.users = data;

},err=>{
  alert("something went wrong");
})


}
DeleteStudent(id:any){
  // console.log(id);
  // this.users=this.users.filter((x:any)=> x.id!= id)


  this.users.splice(this.users.findIndex((a:any)=> a.id === id) , 1);
  alert("data deleted successfully");

}
}


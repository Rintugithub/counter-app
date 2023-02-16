import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators,FormControl,FormArray } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private fb:FormBuilder ) { }
 submit= false;
  ngOnInit(): void {

}

get alternativeNumbers(){
  return this.registrationForm.get('alternativeNumbers') as FormArray
}
get alternativeEmails(){
  return this.registrationForm.get('alternativeEmails') as FormArray
}
addaltNum(){


 this.alternativeNumbers.push(this.fb.control(''));
 console.log(this.fb.control);

}
addaltEmail(){

  this.alternativeEmails.push(this.fb.control(''));
  console.log(this.fb.control);

}
removeNum(i:any) {
  const remove = this.registrationForm.get('alternativeNumbers') as FormArray;
  remove.removeAt(i)
}
removeEmail(i:any) {
  const remove = this.registrationForm.get('alternativeEmails') as FormArray;
  remove.removeAt(i)
}

registrationForm = this.fb.group({
  firstname:['',Validators.required],
  lastname:['',Validators.required],
  number:['',[Validators.required,Validators.pattern('[0-9]{10}')]],
  alternativeNumbers:this.fb.array([]),
  email:['',[Validators.required,Validators.email]],
  alternativeEmails:this.fb.array([]),
})

get f(){

     return this.registrationForm.controls;

}
onSubmit(values:any){
 this.submit = true;
 console.log(values.value);
//  this.FormValue.reset();


}
}

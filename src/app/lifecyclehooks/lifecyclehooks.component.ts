import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
@Component({
  selector: 'app-lifecyclehooks',
  templateUrl: './lifecyclehooks.component.html',
  styleUrls: ['./lifecyclehooks.component.css']
})
export class LifecyclehooksComponent implements OnInit {
  inputdata:string="red";
  name!:string;
  price!:number;
  product:Product = new Product();


  constructor() {
    // console.log("constructor called");

   }

  ngOnInit(): void {
    // console.log("ngonit called");

  }
  handleDate(data:any){

    this.inputdata = data.target.value;
    // console.log(this.inputdata);


  }
  updateProduct(){
    // this.product = new Product();
    this.product.name = this.name;
    this.product.price = this.price;
    console.log(this.product);
  }



}

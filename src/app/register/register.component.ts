import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 out(fn:string,ln:string,ema:string,pwo:string,cpp:string){
   var a=localStorage.getItem("myname")
   var b=localStorage.getItem("last")
   var c=localStorage.getItem("myemail")
  
   var d=localStorage.getItem("Pass")
  var e=localStorage.getItem("confirm")
  console.log(a);
  console.log(b);
  console.log(c);
  console.log(d);
  console.log(e);
  
 }

  


}

import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // name=localStorage.getItem("myname");
  constructor(private router:Router) { }

  ngOnInit(): void {
  }  
   name=localStorage.getItem("myname");
  getdata(fname:string,lname:string,em:string,pw:string,cp:string){
  localStorage.setItem("myname",fname)
  localStorage.setItem("last",lname)
  localStorage.setItem("myemail",em)
  
  localStorage.setItem("Pass",pw)
  localStorage.setItem("confirm",cp)
  }
  outdata(fname:string,lname:string,em:string,pw:string,cp:string){
  if(fname==localStorage.getItem("myname")&&pw==localStorage.getItem("Pass")){
    alert("you got it");
    this.router.navigate(['./prod']);
    
    

  }
  
  else{
    alert("hloo");
    

  }
}
}
  


import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoserviceService {

  constructor() { }
  name='';
  

  abc(myname:any){
    console.log("Hi My Name is from service  : "+myname)
    this.name=myname;
    
  }

  db(){
    console.log("hi from demo services");
  }
  
}

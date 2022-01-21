import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PayserviceService {

  constructor() { }
   available:any="";
   Emi:any="";
   init:any="";
   abc(emi:any){
     this.Emi=emi;
   }
   xyz(Initial:any){
     this.init=Initial;
   }
   checkbalance(){
    
     this.available=this.init-this.Emi;
     console.log( this.available);

   }
}


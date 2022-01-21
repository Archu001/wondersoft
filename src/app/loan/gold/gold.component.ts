import { Component, OnInit } from '@angular/core';
import { PayserviceService } from 'src/app/payservice.service';

@Component({
  selector: 'app-gold',
  templateUrl: './gold.component.html',
  styleUrls: ['./gold.component.css']
})
export class GoldComponent implements OnInit {

  constructor(private pay:PayserviceService) { }

  ngOnInit(): void {
  }
  // Initial=localStorage.getItem("Ib");
  // avail="";
  // newacc(name:any,num:any,acc:any,ib:any,ab:any){
  //   localStorage.setItem("myname",name);
  //   localStorage.setItem("phone",num);
  //   localStorage.setItem("Acc",acc);
  //   localStorage.setItem("Ib",ib);
  //   localStorage.setItem("Ab",ab);
  // }
  // outin(Initial:any){
  //   return this.Initial;
  //   this.pay.xyz(Initial); 
  
  //  }

}

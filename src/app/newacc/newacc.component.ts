import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newacc',
  templateUrl: './newacc.component.html',
  styleUrls: ['./newacc.component.css']
})
export class NewaccComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
   newacc(name:any,num:any,upi:any,acc:any,ib:any,ab:any){
     localStorage.setItem("name",name);
    localStorage.setItem("phone",num);
    localStorage.setItem("upi",upi)
     localStorage.setItem("acc",acc);
     localStorage.setItem("initial",ib);
     localStorage.setItem("remaining",ab);
  }

}

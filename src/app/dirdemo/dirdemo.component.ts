import { NgStyle } from '@angular/common';
import { Component, OnInit,ElementRef } from '@angular/core';

@Component({
  selector: 'app-dirdemo',
  templateUrl: './dirdemo.component.html',
  styleUrls: ['./dirdemo.component.css']
})
export class DirdemoComponent implements OnInit {

  constructor(private el:ElementRef) { }

  ngOnInit(): void {

  }
   value="";
  val="";
  
  
   color(value:any){
     document.body.style.backgroundColor=value;
     console.log(this.value);

   }
   font(val:any){
     document.body.style.color=val;
   }
  
  

}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.css']
})
export class TDFComponent implements OnInit {
 
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(mydata:any): void{
    console.log(mydata)
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temforms',
  templateUrl: './temforms.component.html',
  styleUrls: ['./temforms.component.css']
})
export class TemformsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onsubmit(mydata:any){
   console.log(mydata);
   localStorage.setItem("signup",mydata);
  }

}

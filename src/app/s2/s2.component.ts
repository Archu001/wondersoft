import { Component, OnInit } from '@angular/core';
import { DemoserviceService } from '../demoservice.service';

@Component({
  selector: 'app-s2',
  templateUrl: './s2.component.html',
  styleUrls: ['./s2.component.css']
})
export class S2Component implements OnInit {

  constructor(private dblogic:DemoserviceService) { }

  ngOnInit(): void {
  }
  dbservname="";
  xyz(){
    this.dblogic.db();
    this.dbservname=this.dblogic.name;
  }
  
  
}



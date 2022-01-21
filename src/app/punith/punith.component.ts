import { Component, OnInit } from '@angular/core';
import { ChatservService } from '../chatserv.service';

@Component({
  selector: 'app-punith',
  templateUrl: './punith.component.html',
  styleUrls: ['./punith.component.css']
})
export class PunithComponent implements OnInit {

  constructor(private cs:ChatservService) { }

  ngOnInit(): void {
  }
  msgs:any=[]
  send(mymsg:any){
    this.msgs=this.cs.chat(mymsg);
  }

}

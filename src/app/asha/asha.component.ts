import { Component, OnInit } from '@angular/core';
import { ChatservService } from '../chatserv.service';

@Component({
  selector: 'app-asha',
  templateUrl: './asha.component.html',
  styleUrls: ['./asha.component.css']
})
export class AshaComponent implements OnInit {

  constructor(private cs:ChatservService) { }

  ngOnInit(): void {
  }
  msgs:any=[];
   send(mymsg:any){
   this.msgs=this.cs.chat(mymsg);

 }
}

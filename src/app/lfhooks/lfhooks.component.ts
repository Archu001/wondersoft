import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-lfhooks',
  templateUrl: './lfhooks.component.html',
  styleUrls: ['./lfhooks.component.css']
})
export class LfhooksComponent implements OnInit,OnDestroy {

  constructor() {
    console.log("hi from constructor")
   }
  ngOnDestroy(): void {
    console.log("hi from destroy");
  }

  ngOnInit(): void {
    console.log("hi ......oninit");
  }

}

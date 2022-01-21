import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  result:any='';
  longButtons:string[]=['AC','CE']
  buttons:string[]=['7','8','9','/','4','5','6','*','1','2','3','-','.','0','=','+'];
  private pV:string='';
  private cV:string='';
  addto(value:string){
    if(this.result !=''){
      this.pV=this.cV;
      this.cV=value;
    }
    if(value=='AC'){
      this.result='';
    }
    else if(value=='CE'){
      this.result = this.pV != '='? this.result.slice(0,-1):this.result;
    }else if(value=='='){
      this.result=eval(this.result);
    }else{
      this.result+=value;
    }

  }

}

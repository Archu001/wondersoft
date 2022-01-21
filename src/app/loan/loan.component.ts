import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PayserviceService } from '../payservice.service';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})
export class LoanComponent implements OnInit {
   
  constructor(private pay:PayserviceService) { }
  
  ngOnInit(): void {
  }
  total:any = "0";
  public emi:any ="0";
  calculateValue(pAmount: any, duration: any, loanType: any) {
      var mytotal: any = 0;
      var rateOfInterest: any = loanType/(12*100);
      mytotal = pAmount*rateOfInterest*Math.pow(1 + rateOfInterest, duration) / (Math.pow(1 + rateOfInterest, duration) - 1);
      this.total = Math.round(mytotal*duration);
      this.emi =  Math.round(mytotal);

  }
  //  out(emi:any){
  //    return this.emi;
  //   this.pay.abc(emi);
 
  //  }
  
}

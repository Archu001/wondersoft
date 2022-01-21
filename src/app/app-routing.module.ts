import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeploymentComponent } from './deployment/deployment.component';
import { DevelopmentComponent } from './development/development.component';
import { GalaryComponent } from './galary/galary.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PagenotComponent } from './pagenot/pagenot.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { ServiceComponent } from './service/service.component';
import { TestingComponent } from './testing/testing.component';
import { Router } from '@angular/router'; 
import { LoanComponent } from './loan/loan.component';
import { CarComponent } from './loan/car/car.component';
import { EduComponent } from './loan/edu/edu.component';
import { GoldComponent } from './loan/gold/gold.component';
import { DirdemoComponent } from './dirdemo/dirdemo.component';
import { CalcComponent } from './calc/calc.component';
import { PaymentComponent } from './payment/payment.component';
import { BalanceComponent } from './balance/balance.component';
import { NewaccComponent } from './newacc/newacc.component';
import { LfhooksComponent } from './lfhooks/lfhooks.component';
import { AshaComponent } from './asha/asha.component';
import { PunithComponent } from './punith/punith.component';
import { TemformsComponent } from './temforms/temforms.component';


const routes: Routes = [
  {path:'home',
  component:HomeComponent
  },
  {
    path:'galary',
    component:GalaryComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'prod',
    component:ProductsComponent
  },
  {
    path:'direct',
    component:DirdemoComponent
  },{
    path:'lch',
    component:LfhooksComponent 
  },
  { 
    path:'pay',
    component:PaymentComponent
  },
  { 
    path:'bal',
    component:BalanceComponent
  },{ path:'acc',
  component:NewaccComponent

  },{
   path:'tdf',
   component:TemformsComponent
  },
  {
    path:'',
    component:PagenotComponent
  },{
    path:'calc/asha',
    component:AshaComponent
  },{
    path:'calc/punith',
    component:PunithComponent
  },{
    path:'calc/direct',
    component:DirdemoComponent
  },
  {
    path:'loan',
    component:LoanComponent,
       children:[
        {
          path:'car',
          component:CarComponent
          
        }
        
      ]
    }, 
   {
     path:'edu',
     component:EduComponent
   },{
     path:'gold',
     component:GoldComponent
   } ,

  {path:'calc',
  component:CalcComponent

  },
  {
    path:'login',
    component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

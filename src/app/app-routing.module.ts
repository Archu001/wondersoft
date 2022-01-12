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
    path:'service',
    component:ServiceComponent,
       children:[
        {
          path:'dev',
          component:DevelopmentComponent
          
        },
        {
          path:'test',
          component:TestingComponent
         
        },
        {
          path:'deploy',
          component:DeploymentComponent
         
        }
      ]
    
    
  },
  {
    path:'login',
    component:LoginComponent
  },{
    path:'**',
    component:PagenotComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

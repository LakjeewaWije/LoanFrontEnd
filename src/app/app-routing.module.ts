import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActivatedRouteSnapshot, RouterModule, RouterStateSnapshot, Routes} from '@angular/router';
import { LoanComponent } from '../app/loan/loan/loan.component';
const routes: Routes = [
  { path: '', redirectTo: '/loan', pathMatch: 'full' },
  {path: 'loan' , component: LoanComponent}
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }

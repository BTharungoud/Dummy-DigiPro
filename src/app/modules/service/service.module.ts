import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DigitalMarketingComponent } from './digital-marketing/digital-marketing.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: DigitalMarketingComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceModule { }

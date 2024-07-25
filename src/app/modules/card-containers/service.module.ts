import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DigitalMarketingComponent } from '../service/digital-marketing/digital-marketing.component';

const routes: Routes = [
  { path: '', component: DigitalMarketingComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FutureBlogsComponent } from './future-blogs/future-blogs.component';

const routes: Routes = [
  { path: '', component: FutureBlogsComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogsModule { }

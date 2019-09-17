import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BookListComponent } from './consultation/book-list/book-list.component';
import { BookDetailComponent } from './consultation/book-detail/book-detail.component';

const routes: Routes = [
  { path: '', component: BookListComponent },
  {
    path: 'book/:id',
    component: BookDetailComponent
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { Routes, RouterModule } from '@angular/router';
import { BookEditComponent } from './book-edit/book-edit.component';
import { AuthorEditComponent } from './author-edit/author-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: 'book', component: BookEditComponent },
      { path: 'book/:id', component: BookEditComponent },
      { path: 'author', component: AuthorEditComponent }
    ]
  }
];

@NgModule({
  declarations: [AdminComponent, BookEditComponent, AuthorEditComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule {}

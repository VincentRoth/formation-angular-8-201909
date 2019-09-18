import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { Routes, RouterModule } from '@angular/router';
import { BookEditComponent } from './book-edit/book-edit.component';
import { AuthorEditComponent } from './author-edit/author-edit.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: 'book', component: BookEditComponent },
      { path: 'author', component: AuthorEditComponent }
    ]
  }
];

@NgModule({
  declarations: [AdminComponent, BookEditComponent, AuthorEditComponent],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class AdminModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book/book.component';
import { BookListComponent } from './book-list/book-list.component';
import { SharedModule } from '../shared/shared.module';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [BookComponent, BookListComponent, BookDetailComponent],
  imports: [CommonModule, SharedModule, RouterModule],
  exports: [BookListComponent]
})
export class ConsultationModule {}

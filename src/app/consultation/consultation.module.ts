import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book/book.component';
import { BookListComponent } from './book-list/book-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [BookComponent, BookListComponent],
  imports: [CommonModule, SharedModule],
  exports: [BookListComponent]
})
export class ConsultationModule {}

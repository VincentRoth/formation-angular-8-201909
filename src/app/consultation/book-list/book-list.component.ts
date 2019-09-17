import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/shared/book.service';
import { Book } from 'src/app/shared/models/book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[];
  message: string;

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.bookService.getAll().subscribe({
      next: books => (this.books = books)
    });
  }

  onClick(book: Book) {
    this.message = book.title;
  }
}

import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/shared/models/book';
import { BookService } from 'src/app/shared/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  book: Book;

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.bookService.getOne().subscribe({
      next: book => (this.book = book)
    });
  }
}

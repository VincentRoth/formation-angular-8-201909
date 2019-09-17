import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from 'src/app/shared/models/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @Input() book: Book;
  @Output() titleClick: EventEmitter<Book> = new EventEmitter<Book>();

  constructor() {}

  ngOnInit() {}

  onTitleClick(event: MouseEvent) {
    this.titleClick.emit(this.book);
  }
}

import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/shared/models/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  book: Book;

  constructor() {}

  ngOnInit() {
    this.book = {
      title: 'Mon livre',
      author: 'Un auteur'
    };
  }
}

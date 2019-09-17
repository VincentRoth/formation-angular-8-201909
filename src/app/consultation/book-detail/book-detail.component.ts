import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/shared/models/book';
import { BookService } from 'src/app/shared/book.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  book: Book;

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    /*
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id: number = parseInt(params.get('id'), 10);
      this.bookService.getById(id).subscribe(book => (this.book = book));
    });
    */

    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
          const id: number = parseInt(params.get('id'), 10);
          return this.bookService.getById(id);
        })
      )
      .subscribe(book => (this.book = book));
  }
}

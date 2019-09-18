import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/shared/models/book';
import { BookService } from 'src/app/shared/book.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  book: Book;

  constructor(
    private bookService: BookService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.book = {
      title: null,
      author: null
    };
    this.activatedRoute.paramMap.subscribe({
      next: (paramMap: ParamMap) => {
        const id = paramMap.get('id');
        if (id) {
          this.bookService.getById(parseInt(id, 10)).subscribe({
            next: book => (this.book = book)
          });
        }
      }
    });
  }

  onSubmit(form) {
    if (form.form.valid) {
      const observer = {
        complete: () => {
          this.router.navigate(['consultation']);
        }
      };
      if (this.book.id) {
        this.bookService.update(this.book).subscribe(observer);
      } else {
        this.bookService.create(this.book).subscribe(observer);
      }
    }
  }
}

import { Injectable } from '@angular/core';
import { Book } from './models/book';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor() {}

  getOne(): Observable<Book> {
    return of({
      title: 'Quatreving-treize',
      author: 'Hugo'
    });
  }

  getAll(): Observable<Book[]> {
    return of([
      {
        title: 'Quatreving-treize',
        author: 'Hugo'
      },
      {
        title: 'Quatreving-quatorze',
        author: 'Hugo'
      },
      {
        title: 'Quatreving-quinze',
        author: 'Hugo'
      }
    ]);
  }
}

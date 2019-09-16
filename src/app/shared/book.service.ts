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
}

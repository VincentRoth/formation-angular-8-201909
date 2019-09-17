import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from './models/book';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor(private http: HttpClient) {}

  getOne(): Observable<Book> {
    return of({
      id: 0,
      title: 'Quatreving-treize',
      author: 'Hugo'
    });
  }

  getAll(): Observable<Book[]> {
    return this.http.get<Book[]>('/api/books');
  }
}

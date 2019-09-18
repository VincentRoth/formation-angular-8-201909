import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from './models/book';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Book[]> {
    return this.http.get<Book[]>('/api/books');
  }

  getById(id: number): Observable<Book> {
    return this.http.get<Book>(`/api/books/${id}`);
  }

  create(model: Book): Observable<any> {
    return this.http.post('/api/books', model);
  }

  update(model: Book): Observable<any> {
    return this.http.put(`/api/books/${model.id}`, model);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`/api/books/${id}`);
  }
}

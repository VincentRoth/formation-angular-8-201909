import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from './models/book';
import { AbstractCrudService } from './abstractCrud.service';

@Injectable({
  providedIn: 'root'
})
export class BookService extends AbstractCrudService<Book> {
  constructor(protected http: HttpClient) {
    super(http, '/api/books');
  }
}

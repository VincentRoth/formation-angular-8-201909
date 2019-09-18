import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AbstractCrudService } from './abstractCrud.service';
import { Author } from './models/author';

@Injectable({
  providedIn: 'root'
})
export class AuthorService extends AbstractCrudService<Author> {
  constructor(protected http: HttpClient) {
    super(http, '/api/authors');
  }
}

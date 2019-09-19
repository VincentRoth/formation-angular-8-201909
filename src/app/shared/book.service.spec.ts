import { TestBed } from '@angular/core/testing';

import { BookService } from './book.service';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

describe('BookService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    })
  );

  it('should be created', () => {
    const service: BookService = TestBed.get(BookService);
    expect(service).toBeTruthy();
  });

  it('should query all books', () => {
    const service: BookService = TestBed.get(BookService);
    const httpMock = TestBed.get(HttpTestingController);

    service.getAll().subscribe({
      next: books => expect(books[0].id).toBe(1)
    });

    // check request has been done
    const req = httpMock.expectOne('/api/books');

    // send back data to waiting observable
    req.flush([
      {
        id: 1,
        title: 'Title',
        author: 'Author'
      }
    ]);

    // check there is no other request
    httpMock.verify();
  });
});

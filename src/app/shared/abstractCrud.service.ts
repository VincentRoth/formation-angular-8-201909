import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Entity } from './models/entity';

export abstract class AbstractCrudService<T extends Entity> {
  protected url: string;

  constructor(protected http: HttpClient, url: string) {
    this.url = url;
  }

  getAll(): Observable<T[]> {
    return this.http.get<T[]>(this.url);
  }

  getById(id: number): Observable<T> {
    return this.http.get<T>(`${this.url}/${id}`);
  }

  create(model: T): Observable<T> {
    return this.http.post<T>(this.url, model);
  }

  update(model: T): Observable<T> {
    return this.http.put<T>(`${this.url}/${model.id}`, model);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../models/book.model';
const baseUrl = 'http://localhost:8080/api/tutorials';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient) { }

  // Get all books

  getAll(): Observable<Book[]> {
    return this.http.get<Book[]>(baseUrl);
  }

  // get one book
  get(_id: any): Observable<Book> {
    return this.http.get(`${baseUrl}/${_id}`);
  }

  // add a book
  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  // edit --> not yet used
  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  // delete one book
  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  // delete all book
  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  // search book
  findByTitle(title: any): Observable<Book[]> {
    return this.http.get<Book[]>(`${baseUrl}?title=${title}`);
  }
}

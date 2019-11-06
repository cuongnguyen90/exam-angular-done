import {Injectable} from '@angular/core';

const URL_API = 'http://localhost:3000';

import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {InterfaceBook} from '../interface-book';
import {ToastrService} from 'ngx-toastr';

// @ts-ignore
@Injectable({
  providedIn: 'root'
})
export class BookService {


  constructor(private http: HttpClient, private toastr: ToastrService) {
  }


  GetAll(): Observable<object> {
    return this.http.get<object>(`${URL_API}/books`);
  }

  GetById(id: number): Observable<object> {
    return this.http.get(`${URL_API}/books/${id}`);
  }

  // @ts-ignore
  Delete(id: number): Observable {
    return this.http.delete(`${URL_API}/books/${id}`);
  }

  // @ts-ignore
  CreateBook(book: InterfaceBook): Observable {
    return this.http.post<InterfaceBook>(`${URL_API}/books`, book);
  }

  // @ts-ignore
  UpdateBook(id: number, book: InterfaceBook): Observable {
    return this.http.put<InterfaceBook>(`${URL_API}/books/${id}`, book);
  }


  public showSuccess(mgs: string): void {
    this.toastr.success(mgs);
  }

  public showErrors(mgs: string): void {
    this.toastr.error(mgs);
  }


}

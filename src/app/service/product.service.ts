import {Injectable} from '@angular/core';

const URL_API = 'http://localhost:8000/api';

import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {InterfaceUser} from '../interface-user';
import {ToastrService} from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(private http: HttpClient, private toastr: ToastrService) {
  }


  GetAll(): Observable<object> {
    return this.http.get<object>(`${URL_API}/user`);
  }

  GetById(id: number): Observable<object> {
    return this.http.get(`${URL_API}/user/${id}/detail`);
  }

  // @ts-ignore
  Delete(id: number): Observable {
    return this.http.delete(`${URL_API}/user/${id}/delete`);
  }

  // @ts-ignore
  addUser(user: InterfaceUser): Observable {
    return this.http.post<InterfaceUser>(`${URL_API}/user/create`, user);
  }


  public showSuccess(mgs: string): void {
    this.toastr.success(mgs);
  }

  public showErrors(mgs: string): void {
    this.toastr.error(mgs);
  }


}

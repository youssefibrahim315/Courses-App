import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';
const Api = {
  list:'https://api.npoint.io/8494c045d50509ba0d5a',
  create:'',
  update:'',
  delete:'',
  getById:''
}
@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  http = inject(HttpService)

  list(): Observable<any> {
    return this.http.get(Api.list);
  }
  create(body:any): Observable<any> {
    return this.http.post(Api.create,body);
  }
  update(body:any): Observable<any> {
    return this.http.update(Api.update,body);
  }
  delete(id:number): Observable<any> {
    return this.http.delete(Api.delete,id);
  }
  getById(id:number): Observable<any> {
    return this.http.getWithParam(Api.getById,id);
  }
}

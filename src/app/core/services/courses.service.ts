import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';

const Api = {
  coursesList: 'https://api.npoint.io/983f88db4d99fec8edd9',
  categoriesList: 'https://api.npoint.io/8378472d08789a9cb165',
  create: '',
  update: '',
  delete: '',
  getById: 'https://api.npoint.io/983f88db4d99fec8edd9'
}
//  Categories API: 

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  http = inject(HttpService)

  coursesList(): Observable<any> {
    return this.http.get(Api.coursesList);
  }
  categoriesList(): Observable<any> {
    return this.http.get(Api.categoriesList);
  }
  create(body: any): Observable<any> {
    return this.http.post(Api.create, body);
  }
  update(body: any): Observable<any> {
    return this.http.update(Api.update, body);
  }
  delete(id: number): Observable<any> {
    return this.http.delete(Api.delete, id);
  }
  getById(id: number): Observable<any> {
    return this.http.getWithParam(Api.getById, id);
  }
}

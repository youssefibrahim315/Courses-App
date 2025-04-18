import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  /**
   *
   * @param url
   * @returns
   */
  get(url: string): Observable<any> {
    return this.http.get<any>(url)
  }
  /**
   *
   * @param url
   * @param param
   * @returns
   */
  getWithParam(url: string, param?: any): Observable<any> {
    return this.http.get<any>(url, { params: param })
  }

  /**
   * 
   * @param url 
   * @param param 
   * @param header 
   * @returns 
   */

  getWithHeader(url: string, param?:any,header?:HttpHeaders): Observable<any> {
    return this.http.get<any>(url, { params: param , headers:header})
  }
  /**
   * @param url  API Url for get Request
   * @param param
   * @param body object data for create Request
   * @returns
   */
  post(url: string, body: any, param?: any): Observable<any> {
    return this.http.post<any>(url, body,{ params: param})
  }

  /**
   * 
   * @param req 
   * @returns 
   */
  request(req:any): Observable<any> {
    return this.http.request<any>(req)
  }

  postWithHeader(url: string, body: any,param?:any,header?:HttpHeaders): Observable<any> {
    return this.http.post<any>(url, body, {params:param,headers:header})
  }
  /**
   * @param url API Url for get Request
   * @param body object data for create Request
   * @returns
   */
  update(url: string, body: any,param?:any): Observable<any> {
    return this.http.put<any>(url, body,{params:param})
  }

  /**
 * @param url API Url for get Request
 * @param body object data for create Request
 * @returns
 */
  patch(url: string, body: any,param?:any): Observable<any> {
    return this.http.patch<any>(url, body,{params:param})
  }
  /**
   *
   * @param url
   * @returns
   */
  delete(url: string,param:any): Observable<any> {
    return this.http.delete<any>(url,{params:param})
  }
}
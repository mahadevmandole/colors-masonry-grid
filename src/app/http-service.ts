import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ColorResult } from './app.model';

  /**
   * Http service to help with fetch data
   */
@Injectable()
export class HttpService {

  constructor(private http: HttpClient) { }

  /**
   * Fetch result for passed querystring
   * @param {number} searcString Search string
   * @returns { Observable<ColorResult>} Result 
   */
  fetchData(url: string): Observable<ColorResult>{
    return this.http.get<ColorResult>(url);
  }
}
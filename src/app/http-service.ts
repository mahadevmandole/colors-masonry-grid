import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
interface ColorShade {
    image:string;
    color:string;
    light:boolean
}
export interface ColorResult {
    primary: string;
    secondary:string;
    colors:ColorShade[]
}

@Injectable()
export class HttpService {
  constructor(private http: HttpClient) { }

  getSearchResult(searcString: string): Observable<ColorResult>{
    const url = 'https://backend.picular.co/api/search?query='+ searcString;
    return this.http.get<ColorResult>(url);
  }
}
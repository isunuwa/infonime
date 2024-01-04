import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  constructor(private httpClient: HttpClient) {}

  getAnime(query: any): Observable<any> {
    let queryParams = new HttpParams(query);

    // filter if data is empty
    Object.keys(query).forEach(
      (key) => query[key] && (queryParams = queryParams.append(key, query[key]))
    );

    debugger;

    return this.httpClient.get<any>(`${environment.JIKAN_API_URl}/anime`, {
      params: queryParams,
    });
  }
}

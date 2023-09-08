import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class AnimeService {
  constructor(private httpClient: HttpClient) {}

  getAnimeList(): Observable<any> {
    // let parameters = { sfw: false };
    // let queryParams = new HttpParams({ fromObject: parameters });

    return this.httpClient.get<any>(`${environment.JIKAN_API_URl}/anime`);
  }

  getTopAnimeList(): Observable<any> {
    return this.httpClient.get<any>(
      `${environment.JIKAN_API_URl}/top/anime?limit=5`
    );
  }

  getRandomAnime(): Observable<any> {
    return this.httpClient.get<any>(
      `${environment.JIKAN_API_URl}/random/anime`
    );
  }

  getAnimeDetail(id: number): Observable<any> {
    let url = `${environment.JIKAN_API_URl}/anime/${id}`;
    return this.httpClient.get<any>(url).pipe();
  }
}

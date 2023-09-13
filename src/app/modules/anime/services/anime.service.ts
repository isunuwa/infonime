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
    return this.httpClient.get<any>(`${environment.JIKAN_API_URl}/anime`);
  }

  getAiringAnimeList(): Observable<any> {
    let parameters = { limit: 4, status: 'airing', min_score: 8 };
    let queryParams = new HttpParams({ fromObject: parameters });

    return this.httpClient.get<any>(`${environment.JIKAN_API_URl}/anime`, {
      params: queryParams,
    });
  }

  getTopAnimeList(): Observable<any> {
    let parameters = { limit: 5, filter: 'airing' };
    let queryParams = new HttpParams({ fromObject: parameters });

    return this.httpClient.get<any>(`${environment.JIKAN_API_URl}/top/anime`, {
      params: queryParams,
    });
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

  getAnimeCharacters(id: number): Observable<any> {
    let url = `${environment.JIKAN_API_URl}/anime/${id}/characters`;
    return this.httpClient.get<any>(url);
  }
}

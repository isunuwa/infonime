import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private location: Location
  ) {}

  getAnime(query: any): Observable<any> {
    const nonEmptyQueryParams: { [key: string]: any } = {};

    // filter if data is empty
    Object.keys(query).forEach((key) => {
      if (
        query[key] !== undefined &&
        query[key] !== null &&
        query[key] !== ''
      ) {
        nonEmptyQueryParams[key] = query[key];
      }
    });

    // assigns the filtered data to the route url
    const url = this.router
      .createUrlTree([], {
        relativeTo: this.activatedRoute,
        queryParams: nonEmptyQueryParams,
      })
      .toString();

    // replace the url
    this.location.replaceState(url);

    return this.httpClient.get<any>(`${environment.JIKAN_API_URl}/anime`, {
      params: nonEmptyQueryParams,
    });
  }
}

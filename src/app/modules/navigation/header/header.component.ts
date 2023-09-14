import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import {
  Observable,
  Subject,
  debounceTime,
  distinctUntilChanged,
  switchMap,
} from 'rxjs';

import { Anime } from '../../anime/models/anime.module';
import { AnimeService } from '../../anime/services/anime.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  // data
  searchAnimes: Anime[] = [];

  toggleSearchBarStatus: boolean = false;
  enteredSearchValue: string = '';
  searchText!: string;

  constructor(private animeService: AnimeService) {
    this.searchSubject
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap((query) => this.animeService.getAnimeList(query))
      )
      .subscribe((response) => {
        console.log(response.data);
        this.searchAnimes = response.data;
      });
  }

  ngOnInit(): void {}

  // ========= search section start =========
  private searchSubject = new Subject<string>();

  onSearch(query: string): any {
    this.searchSubject.next(query.trim());
    console.log(query);
  }

  getSearchAnimes(query: string): any {
    let parameters = { q: query, limit: 10 };
    let queryParams = new HttpParams({ fromObject: parameters });

    this.animeService.getAnimeList(queryParams);
  }

  toggleSearchBar(): void {
    this.toggleSearchBarStatus = !this.toggleSearchBarStatus;
  }
}

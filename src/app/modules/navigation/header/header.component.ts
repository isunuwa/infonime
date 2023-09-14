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

  searchSubject = new Subject<string>();
  toggleSearchBarStatus: boolean = false;
  enteredSearchValue: string = '';
  searchText!: string;

  @ViewChild('searchInput') searchInput!: ElementRef;

  constructor(private animeService: AnimeService) {
    this.searchSubject
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap((query) => this.animeService.getAnimeList(query))
      )
      .subscribe((response) => {
        this.searchAnimes = response.data;
      });
  }

  ngOnInit(): void {}

  onSearch(event: any): any {
    const query = event.target.value;
    if (query.length > 0) {
      this.searchSubject.next(query);
    }
  }

  toggleSearchBar(): void {
    this.toggleSearchBarStatus = !this.toggleSearchBarStatus;
    if (this.toggleSearchBarStatus) {
      setTimeout(() => {
        this.searchInput.nativeElement.focus();
      }, 400);
    } else {
      this.searchInput.nativeElement.value = '';
    }
  }
}

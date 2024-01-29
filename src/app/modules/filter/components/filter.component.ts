import { Component, OnInit } from '@angular/core';
import { Genre, Rating, Status, Type, Order, Sort } from './../filter-data';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FilterService } from '../services/filter.service';
import { Anime } from '../../anime/models/anime.module';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
})
export class FilterComponent implements OnInit {
  genre = Genre;
  rating = Rating;
  status = Status;
  type = Type;
  order = Order;
  sort = Sort;

  anime: Anime[] = [];

  pageIndex: number = 1;
  pageSize: number = 24;

  filterForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private filterService: FilterService
  ) {}

  ngOnInit(): void {
    this.filterForm = this.formBuilder.group({
      genre: [''],
      rating: [''],
      status: [''],
      type: [''],
      order: [''],
      sort: [''],
      q: [''],
    });

    const params = {
      page: this.pageIndex,
      limit: this.pageSize,
    };

    this.getFilterAnime(params);
  }

  getFilterAnime(queryParams: any): void {
    this.filterService.getAnime(queryParams).subscribe((response) => {
      this.anime = response.data;
    });
  }

  onFilterSubmit(): void {
    const formData = this.filterForm.value;

    const params = {
      page: this.pageIndex,
      limit: this.pageSize,
    };

    const requestBody = {
      ...params,
      ...formData,
    };

    let res = this.getFilterAnime(requestBody);
  }

  resetFilter(): void {
    this.filterForm.reset();
  }
}

import { Component, OnInit } from '@angular/core';

import { AnimeService } from '../../services/anime.service';
import { Anime } from '../../models/anime.module';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
})
export class AnimeListComponent implements OnInit {
  animes: Anime[] = [];
  topAnimes: Anime[] = [];
  randomAnime!: Anime;

  constructor(private animeService: AnimeService) {}

  ngOnInit(): void {
    // this.getAnimes();
    this.getRandomAnime();
    // this.getTopAnimes();
  }

  getAnimes(): void {
    this.animeService.getAnimeList().subscribe((response) => {
      console.log(response.data);

      this.animes = response.data;
    });
  }

  getTopAnimes(): void {
    this.animeService.getTopAnimeList().subscribe((response) => {
      console.log(response.data);

      this.topAnimes = response.data;
    });
  }

  getRandomAnime(): void {
    this.animeService.getRandomAnime().subscribe((response) => {
      this.randomAnime = response.data;
    });
  }
}

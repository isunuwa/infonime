import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AnimeService } from '../../services/anime.service';
import { Anime } from '../../models/anime.module';
import { Character } from '../../models/character.module';

@Component({
  selector: 'app-anime-detail',
  templateUrl: './anime-detail.component.html',
})
export class AnimeDetailComponent implements OnInit {
  anime!: Anime;
  animeCharacters!: Character[];

  constructor(
    private animeService: AnimeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getAnimeDetail();
    this.getAnimeCharacters();
  }

  getAnimeDetail(): void {
    const id = +this.route.snapshot.params['id'];

    this.animeService.getAnimeDetail(id).subscribe((response) => {
      this.anime = response.data;
    });
  }

  getAnimeCharacters(): void {
    const id = +this.route.snapshot.params['id'];

    this.animeService.getAnimeCharacters(id).subscribe((response) => {
      this.animeCharacters = response.data;
    });
  }
}

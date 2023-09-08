import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AnimeService } from '../../services/anime.service';
import { Anime } from '../../models/anime.module';

@Component({
  selector: 'app-anime-detail',
  templateUrl: './anime-detail.component.html',
})
export class AnimeDetailComponent implements OnInit {
  anime!: Anime;

  constructor(
    private animeService: AnimeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getAnimeDetail();
  }

  getAnimeDetail(): void {
    const id = +this.route.snapshot.params['id'];

    this.animeService.getAnimeDetail(id).subscribe((response) => {
      console.log(response.data);

      this.anime = response.data;
    });

    // this.animeService.getAnime(id).subscribe((anime) => (this.anime = anime));
  }
}

import { ActivatedRoute } from '@angular/router';
import { MovieDetail } from '../model/movie';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html'
})
export class MovieDetailComponent implements OnInit {
  @Input()
  movie: MovieDetail;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(({movieDetail}: { movieDetail: MovieDetail }) => this.movie = movieDetail);
  }
}

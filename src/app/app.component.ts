import { Component, OnInit } from '@angular/core';
import { NewsApiService } from './news-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  articles: Array<any> = [];
  sources: Array<any> = [];

  constructor(private newsapi: NewsApiService) {
    // console.log(`app component called`);
  }

  ngOnInit() {
    this.newsapi.initArticles()
      .subscribe(data => this.articles = data['articles']);
    this.newsapi.initSources()
      .subscribe(data => this.sources = data['sources']);
  }

  searchArticles(source: String) {
    this.newsapi.getArticlesById(source)
      .subscribe(data => this.articles = data['articles']);
  }
}

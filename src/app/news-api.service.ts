import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  api_key: String = '3522c341e0384125a446af6cee6c6689';

  constructor(private http: HttpClient) { }

  initSources() {
    return this.http.get('https://newsapi.org/v2/sources?language=en&apiKey='+this.api_key)
  }

  initArticles() {
    return this.http.get('https://newsapi.org/v2/top-headlines?country=in&apiKey='+this.api_key)
  }

  getArticlesById (source: String) {
    return this.http.get('https://newsapi.org/v2/top-headlines?sources='+source+'&apiKey='+this.api_key)
  }
}

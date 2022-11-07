import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

const config: any = {
  url: 'https://yt-api.p.rapidapi.com',
  headers: {
    'X-RapidAPI-Key': environment.apiKey,
    'X-RapidAPI-Host': 'yt-api.p.rapidapi.com'
  },
};

@Injectable({ providedIn: 'root' })
export class APIService {
  constructor(private http: HttpClient) {}

  getVideos(params: any) {
    config.params = params;
    return this.http.get(`${config.url}/trending`, config);
  }

  getVideosComment(params: any) {
    config.params = params;
    return this.http.get(`${config.url}/comments`, config);
  }

  getPeoplesData() {
    const url = 'https://jsonplaceholder.typicode.com';
    return this.http.get(`${url}/users`);
  }

  getDocumentAPI() {
    return this.http.get(`${config.url}/related`, config);
  }

  getChannelsAPI() {
    return this.http.get(`${config.url}/playlist`, config);
  }
}

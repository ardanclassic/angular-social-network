import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const api_1: any = {
  url: 'https://ytube-videos.p.api_1.com',
  headers: {
    'X-RapidAPI-Key': 'c24a24b726mshabd70592832fdd4p12d2bdjsn1525fccffad0',
    'X-RapidAPI-Host': 'ytube-videos.p.rapidapi.com',
  },
};

@Injectable({ providedIn: 'root' })
export class APIService {
  constructor(private http: HttpClient) {}

  getVideos(params: any) {
    api_1.params = params;
    return this.http.get(`${api_1.url}/trending`, api_1);
  }

  getVideosComment(params: any) {
    api_1.params = params;
    return this.http.get(`${api_1.url}/comments`, api_1);
  }

  getPeoplesData() {
    const url = 'https://jsonplaceholder.typicode.com';
    return this.http.get(`${url}/users`);
  }

  getDocumentAPI() {
    const config = {
      params: { id: 'dQw4w9WgXcQ' },
      headers: {
        'X-RapidAPI-Key': 'c24a24b726mshabd70592832fdd4p12d2bdjsn1525fccffad0',
        'X-RapidAPI-Host': 'yt-api.p.rapidapi.com',
      },
    };
    return this.http.get(`https://yt-api.p.rapidapi.com/related`, config);
  }

  getChannelsAPI() {
    const config = {
      params: { id: 'PLMC9KNkIncKseYxDN2niH6glGRWKsLtde' },
      headers: {
        'X-RapidAPI-Key': 'c24a24b726mshabd70592832fdd4p12d2bdjsn1525fccffad0',
        'X-RapidAPI-Host': 'yt-api.p.rapidapi.com',
      },
    };
    return this.http.get(`https://yt-api.p.rapidapi.com/playlist`, config);
  }
}

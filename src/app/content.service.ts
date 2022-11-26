import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  contentLocation: string = 'assets/content/';
  manifestLocation: string = this.contentLocation + 'manifest.json';

  constructor(
    private http: HttpClient
  ) { }

  getManifest() {
    return this.http.get<Manifest>(this.manifestLocation);
  }

  getMarkdownContent(path: string) {
    return this.http.get(this.contentLocation + path, {
      responseType: 'text'
    });
  }
}

export interface Manifest {
  title: string;
  home: string;
  navigation: {title: string, path: string}[];
}
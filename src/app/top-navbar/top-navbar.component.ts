import { Component, OnInit } from '@angular/core';
import { ContentService, Manifest } from '../content.service';

@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.css']
})
export class TopNavbarComponent implements OnInit {
  manifestLoaded: Promise<boolean> | undefined;
  manifest!: Manifest;

  constructor( private contentService: ContentService) { }

  ngOnInit(): void {
    this.contentService.getManifest()
      .subscribe((data: Manifest) => {
        this.manifest = {
          title: data.title,
          home: data.home,
          navigation: data.navigation
        };
        this.manifestLoaded = Promise.resolve(true);
      });
  }
}

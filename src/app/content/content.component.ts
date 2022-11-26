import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ContentService } from '../content.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  path!: string | null;
  content!: string;

  constructor(
    private route: ActivatedRoute,
    private contentService: ContentService) {
    route.params.subscribe(val => {
      this.path = val['path'];

      if (this.path != null) {
        contentService.getMarkdownContent(this.path)
          .subscribe((data: string) => this.content = data);
      } else {
        this.content = 'No content';
      }
    });
  }

  ngOnInit(): void {}
}

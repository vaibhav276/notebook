import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { marked } from 'marked';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import { ContentService } from '../content.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  path!: string | null;
  content!: SafeHtml;

  constructor(
    private route: ActivatedRoute,
    private contentService: ContentService,
    private domSanitizer: DomSanitizer
    ) {
    route.params.subscribe(val => {
      this.path = val['path'];

      if (this.path != null && this.path.match(/md$/)) {
        contentService.getMarkdownContent(this.path)
          .subscribe((data: string) => 
            this.content = domSanitizer.bypassSecurityTrustHtml(marked.parse(data).replaceAll('#', '%23'))
            );
      } else {
        this.content = 'No content';
      }
    });
  }

  ngOnInit(): void {}
}

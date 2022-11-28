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

  crumbs: {title: string, path: string}[] = [];
  content!: SafeHtml;

  constructor(
    private route: ActivatedRoute,
    private contentService: ContentService,
    private domSanitizer: DomSanitizer
    ) {
    route.params.subscribe(val => {
      let path = val['path'];

      if (path != null && path.match(/md$/)) {
        contentService.getMarkdownContent(path)
          .subscribe((data: string) => 
            this.content = domSanitizer.bypassSecurityTrustHtml(marked.parse(data))
            );

        let prefix = '~/';
        this.crumbs = [];
        path.split('/').forEach((s: string) => {
          let s1 = s;
          s1 = prefix + s1 + '/';
          prefix = s1;
          this.crumbs.push({
            title: s.replaceAll('_', ' '),
            path: s1 + 'index.md'
          });
        });
        this.crumbs.pop();
      } else {
        this.content = 'No content';
      }
    });
  }

  ngOnInit(): void {}
}

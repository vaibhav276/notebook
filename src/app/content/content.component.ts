import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  path!: string | null;

  constructor(private route: ActivatedRoute) {
    route.params.subscribe(val => {
      this.path = val['path'];
    })
  }

  ngOnInit(): void { }
}

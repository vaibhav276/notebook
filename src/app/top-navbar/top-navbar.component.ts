import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.css']
})
export class TopNavbarComponent {
  @Input() title: string | undefined;
  @Input() items: {title: string, href: string}[] | undefined;
}

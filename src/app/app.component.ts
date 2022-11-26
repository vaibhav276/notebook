import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items = [{
    title: 'Essays',
    href: '/essays'
  }, {
    title: 'Book Notes',
    href: '/booknotes'
  }];

  title: string = 'Notebook';
  home: string = 'Home';
}

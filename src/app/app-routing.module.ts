import { NgModule } from '@angular/core';
import { RouterModule, Routes, UrlSegment } from '@angular/router';
import { ContentComponent } from './content/content.component';

const routes: Routes = [
  {
    matcher: (url) => {
      if (url[0].path === 'content') {
        return {
          consumed: url,
          posParams: {
            path: new UrlSegment(url.join('/'), {})
          }
        }
      }
      return null;
    },
    component: ContentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes, UrlSegment } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    matcher: (url) => {
      if (url.length >= 1 && url[0].path === '~') {
        return {
          consumed: url,
          posParams: {
            path: new UrlSegment(url.slice(1).join('/'), {})
          }
        }
      }
      return null;
    },
    component: ContentComponent
  },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

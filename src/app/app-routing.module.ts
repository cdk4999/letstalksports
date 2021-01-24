import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { WrapperComponent } from './layouts/wrapper/wrapper.component';

const routes: Routes = [
  {
    path: '',
    component: WrapperComponent,
    children:
      [
        {
          path: '', loadChildren: './modules/index/index.module#IndexModule'
        }
      ]
  },
  {
    path: 'rankings',
    component: WrapperComponent,
    children:
      [
        {
          path: '', loadChildren: './modules/rankings/rankings.module#RankingsModule'
        }
      ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

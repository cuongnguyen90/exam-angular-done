import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ShowAllComponent} from './product/show-all/show-all.component';
import {DetailComponent} from './product/detail/detail.component';
import {CreateComponent} from './product/create/create.component';


const routes: Routes = [
  {
    path: '',
    component: ShowAllComponent
  },
  {
    path: 'detail/:id',
    component: DetailComponent
  },
  {
    path: 'create',
    component: CreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

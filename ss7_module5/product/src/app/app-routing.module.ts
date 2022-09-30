import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListProductComponent} from './list-product/list-product.component';
import {CreateProducyComponent} from './create-producy/create-producy.component';
import {EditProductComponent} from './edit-product/edit-product.component';


const routes: Routes = [
  {path: '', component: ListProductComponent},
  {path: 'create', component: CreateProducyComponent},
  {path: ':id', component: EditProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

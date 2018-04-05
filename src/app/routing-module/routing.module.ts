import { NgModule, Injectable } from '@angular/core';
import { RouterModule} from '@angular/router';
import { WelcomeComponent} from '../components/welcome/welcome.component';
import { ProductListComponent } from '../components/product-list/product-list.component';
import { NotFoundComponent } from '../components/not-found/not-found.component';

const routes = [
  {path: 'welcome', component: WelcomeComponent},
  {path: 'products', component: ProductListComponent},
  {path: '', component: WelcomeComponent, pathMatch: 'full'},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
  bootstrap: []
})

export class RoutingModule { }

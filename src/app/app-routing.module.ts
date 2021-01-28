import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NavbarComponent} from './navbar/navbar.component'
import { FavoritesComponent } from './favorites/favorites.component';
import {FilterComponent} from './filter/filter.component'


const routes: Routes = [
  // {path: '', component: FilterComponent},
  {path: 'favorites', component: FavoritesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

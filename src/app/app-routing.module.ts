import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AppetizersComponent } from './components//appetizers/appetizers.component';
import { MainsComponent } from './components/mains/mains.component';
import { DessertsComponent } from './components/desserts/desserts.component';
import { SidesComponent } from './components/sides/sides.component';

const routes: Routes = [
  {
    path: 'recipe/:id',
    component: RecipeComponent,
    data: { title: 'Parsley & Sage' },
  },
  { path: '', component: HomeComponent,
    children: [
      { path: 'appetizers', component: AppetizersComponent, outlet: 'showRecipes' },
      { path: 'mains', component: MainsComponent, outlet: 'showRecipes' },
      { path: 'desserts', component: DessertsComponent, outlet: 'showRecipes' },
      { path: 'sides', component: SidesComponent, outlet: 'showRecipes' },
    ],
  }, 
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

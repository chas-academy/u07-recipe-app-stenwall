import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecipesComponent } from './components/recipes/recipes.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AppetizersComponent } from './components/recipes/appetizers/appetizers.component';
import { MainsComponent } from './components/recipes/mains/mains.component';
import { DessertsComponent } from './components/recipes/desserts/desserts.component';
import { SidesComponent } from './components/recipes/sides/sides.component';

const routes: Routes = [
  { path: 'recipe/:id', component: RecipeComponent },
  { path: '', component: RecipesComponent },
  { path: 'appetizers', component: AppetizersComponent },
  { path: 'mains', component: MainsComponent },
  { path: 'desserts', component: DessertsComponent },
  { path: 'sides', component: SidesComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

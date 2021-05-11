import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecipeComponent } from './components/recipe/recipe.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AppetizersComponent } from './components//appetizers/appetizers.component';
import { MainsComponent } from './components/mains/mains.component';
import { DessertsComponent } from './components/desserts/desserts.component';
import { SidesComponent } from './components/sides/sides.component';
import { RandomRecipesComponent } from './components/random-recipes/random-recipes.component';
import { ListComponent } from './components/list/list.component';

const routes: Routes = [
  {
    path: 'recipe/:id',
    component: RecipeComponent,
    data: { title: 'Parsley & Sage' },
  },
  { path: '', component: RandomRecipesComponent },
  { path: 'appetizers', component: AppetizersComponent },
  { path: 'mains', component: MainsComponent },
  { path: 'desserts', component: DessertsComponent },
  { path: 'sides', component: SidesComponent },
  { path: 'list', component: ListComponent},
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

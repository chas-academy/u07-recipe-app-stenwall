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
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { AuthGuard } from './core/auth-guard.guard';

const routes: Routes = [
  {
    path: 'recipe/:id',
    component: RecipeComponent,
    data: { title: 'Parsley & Sage', header: false },
  },
  {
    path: '',
    component: RandomRecipesComponent,
    data: { header: true },
  },
  {
    path: 'login',
    component: SigninComponent,
    data: { title: 'Parsley & Sage', header: false },
  },
  {
    path: 'register',
    component: SignupComponent,
    data: { title: 'Parsley & Sage', header: false },
  },
  {
    path: 'profile',
    component: UserProfileComponent,
    data: { header: true },
  },
  {
    path: 'appetizers',
    component: AppetizersComponent,
    data: { header: true },
  },
  {
    path: 'mains',
    component: MainsComponent,
    data: { header: true },
  },
  {
    path: 'desserts',
    component: DessertsComponent,
    data: { header: true },
  },
  {
    path: 'sides',
    component: SidesComponent,
    data: { header: true },
  },
  {
    path: 'list',
    component: ListComponent,
    data: { title: 'Parsley & Sage', header: false },
    // canActivate:[AuthGuard]
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    data: { title: 'Parsley & Sage', header: false },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

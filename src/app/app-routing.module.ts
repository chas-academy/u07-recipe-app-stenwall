import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/auth-guard.guard';

import { RecipeComponent } from './pages/recipe/recipe.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AppetizersComponent } from './pages/appetizers/appetizers.component';
import { MainsComponent } from './pages/mains/mains.component';
import { DessertsComponent } from './pages/desserts/desserts.component';
import { SidesComponent } from './pages/sides/sides.component';
import { ListComponent } from './pages/list/list.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { ListsComponent } from './pages/lists/lists.component';
import { HomeComponent } from './pages/home/home.component';

const title: string = 'Parsley & Sage';

const routes: Routes = [
  {
    path: 'recipe/:id',
    component: RecipeComponent,
    data: { title, header: false },
  },
  {
    path: 'lists/:id',
    component: ListComponent,
    data: { title, header: false },
    // canActivate:[AuthGuard]
  },
  {
    path: '',
    component: HomeComponent,
    data: { title, header: true },
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { title, header: false },
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: { title, header: false },
  },
  {
    path: 'profile',
    component: UserProfileComponent,
    data: { title, header: true },
  },
  {
    path: 'appetizers',
    component: AppetizersComponent,
    data: { title, header: true },
  },
  {
    path: 'mains',
    component: MainsComponent,
    data: { title, header: true },
  },
  {
    path: 'desserts',
    component: DessertsComponent,
    data: { title, header: true },
  },
  {
    path: 'sides',
    component: SidesComponent,
    data: { title, header: true },
  },
  {
    path: 'lists',
    component: ListsComponent,
    data: { title, header: false },
    // canActivate:[AuthGuard]
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    data: { title, header: false },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

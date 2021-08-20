import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { RecipesService } from './services/recipes.service';
import { EventService } from './services/event.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { RecipeComponent } from './pages/recipe/recipe.component';
import { HeaderComponent } from './components/header/header.component';
import { NavTabBarComponent } from './components/nav-tab-bar/nav-tab-bar.component';
import { AppetizersComponent } from './pages/appetizers/appetizers.component';
import { MainsComponent } from './pages/mains/mains.component';
import { DessertsComponent } from './pages/desserts/desserts.component';
import { SidesComponent } from './pages/sides/sides.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { DietaryPreferencesComponent } from './components/dietary-preferences/dietary-preferences.component';
import { RandomRecipesComponent } from './pages/random-recipes/random-recipes.component';
import { ListComponent } from './pages/list/list.component';
import { RecipeCardComponent } from './components/recipe-card/recipe-card.component';

import { AuthInterceptor } from './interceptors/auth.interceptor';
// import { ApiInterceptor } from '../app/interceptors/api-interceptor.interceptor';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './modules/angular-material/angular-material.module';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { GuestMenuComponent } from './components/guest-menu/guest-menu.component';
import { AuthMenuComponent } from './components/auth-menu/auth-menu.component';
import { HeaderXsComponent } from './components/header-xs/header-xs.component';
import { ListsComponent } from './pages/lists/lists.component';
import { AddListComponent } from './components/add-list/add-list.component';
import { SelectListComponent } from './components/select-list/select-list.component';
import { ListService } from './services/list.service';
import { NavigationService } from './services/navigation.service';
import { AuthService } from './services/auth.service';
import { AuthStateService } from './services/auth-state.service';
import { TokenService } from './services/token.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RecipeComponent,
    PageNotFoundComponent,
    HeaderComponent,
    NavTabBarComponent,
    AppetizersComponent,
    MainsComponent,
    DessertsComponent,
    SidesComponent,
    DietaryPreferencesComponent,
    RandomRecipesComponent,
    ListComponent,
    RecipeCardComponent,
    LoginComponent,
    RegisterComponent,
    GuestMenuComponent,
    AuthMenuComponent,
    HeaderXsComponent,
    ListsComponent,
    AddListComponent,
    SelectListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    EventService,
    RecipesService,
    ListService,
    NavigationService,
    AuthService,
    AuthStateService,
    TokenService,
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}

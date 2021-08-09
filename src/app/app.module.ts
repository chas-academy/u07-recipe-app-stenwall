import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { RecipesService } from './services/recipes.service';
import { EventService } from './services/event.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { HeaderComponent } from './components/header/header.component';
import { NavTabBarComponent } from './components/nav-tab-bar/nav-tab-bar.component';
import { AppetizersComponent } from './components/appetizers/appetizers.component';
import { MainsComponent } from './components/mains/mains.component';
import { DessertsComponent } from './components/desserts/desserts.component';
import { SidesComponent } from './components/sides/sides.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DietaryPreferencesComponent } from './components/dietary-preferences/dietary-preferences.component';
import { RandomRecipesComponent } from './components/random-recipes/random-recipes.component';
import { ListComponent } from './components/list/list.component';
import { RecipeCardComponent } from './components/recipe-card/recipe-card.component';

import { AuthInterceptor } from './interceptors/auth.interceptor';
// import { ApiInterceptor } from '../app/interceptors/api-interceptor.interceptor';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './modules/angular-material/angular-material.module';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { GuestViewComponent } from './components/guest-view/guest-view.component';
import { AuthViewComponent } from './components/auth-view/auth-view.component';
import { HeaderXsComponent } from './components/header-xs/header-xs.component';

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
    SigninComponent,
    SignupComponent,
    UserProfileComponent,
    GuestViewComponent,
    AuthViewComponent,
    HeaderXsComponent,
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
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}

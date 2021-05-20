import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { RecipesService } from '../app/services/recipes.service';
import { EventService } from '../app/services/event.service';

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

// import { ApiInterceptor } from '../app/interceptors/api-interceptor.interceptor';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './modules/angular-material/angular-material.module';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
  ],
  providers: [
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: ApiInterceptor,
    //   multi: true,
    // },
    EventService,
    RecipesService,
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}

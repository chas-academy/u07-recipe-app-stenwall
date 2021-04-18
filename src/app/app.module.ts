import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { RecipeComponent } from './components/recipe/recipe.component';

import { ApiInterceptor } from '../app/interceptors/api-interceptor.interceptor';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './modules/angular-material/angular-material.module';
import { HeaderComponent } from './components/header/header.component';
import { NavTabBarComponent } from './components/nav-tab-bar/nav-tab-bar.component';
import { AppetizersComponent } from './components/recipes/appetizers/appetizers.component';
import { MainsComponent } from './components/recipes/mains/mains.component';
import { DessertsComponent } from './components/recipes/desserts/desserts.component';
import { SidesComponent } from './components/recipes/sides/sides.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    RecipeComponent,
    PageNotFoundComponent,
    HeaderComponent,
    NavTabBarComponent,
    AppetizersComponent,
    MainsComponent,
    DessertsComponent,
    SidesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}

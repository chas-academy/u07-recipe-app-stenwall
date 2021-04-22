import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {
  Recipe,
  ExtendedIngredient,
} from 'src/app/models/api-spoonacular.model';
import { RecipesService } from '../../services/recipes.service';

import {
  MatBottomSheet,
  MatBottomSheetConfig,
} from '@angular/material/bottom-sheet';
import { Overlay } from '@angular/cdk/overlay';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import { BottomSheetComponent } from '../bottom-sheet/bottom-sheet.component';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss'],
})
export class RecipeComponent implements OnInit {
  recipe: Recipe;
  chosenRecipe;
  id: number | string;
  extendedIngredients: ExtendedIngredient[] = [];
  data;
  selectedTab = 'ingredients';
  configBottomSheet: MatBottomSheetConfig = {
    closeOnNavigation: true,
    hasBackdrop: true,
    // backdropClass: ,
    direction: 'ltr',
  };
  isLargeScreen: boolean;

  @ViewChild('templateBottomSheet') TemplateBottomSheet: TemplateRef<any>;

  constructor(
    private route: ActivatedRoute,
    private recipesService: RecipesService,
    private bottomSheet: MatBottomSheet,
    private overlay: Overlay,
    private breakpointObserver: BreakpointObserver
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.route.data.subscribe((data) => (this.data = data));

    this.chosenRecipe = this.recipesService
      .getDetailedRecipe(this.id)
      .subscribe((Recipe) => {
        this.recipe = Recipe;
        this.extendedIngredients = Recipe.extendedIngredients;
      });

    this.onTabChange();

    this.isLargeScreen = this.breakpointObserver.isMatched('(min-width: 992px)');
  }

  onChange(event) {
    this.selectedTab = event.tab.textLabel;
    this.onTabChange();
    console.log(event.tab.textLabel);
  }

  onTabChange() {
    if (this.selectedTab == 'ingredients') {
      console.log(this.selectedTab);
    } else if (this.selectedTab == 'instructions') {
      console.log(this.selectedTab);
    }
  }

  // openBottomSheet() {
  //   const scrollStrategy = this.overlay.scrollStrategies.close();
  //   this.bottomSheet.open(BottomSheetComponent, scrollStrategy);
  // }

  openTemplateSheetMenu() {
    const scrollStrategy = this.overlay.scrollStrategies.reposition();
    this.bottomSheet.open(this.TemplateBottomSheet, { scrollStrategy });
  }

  closeTemplateSheetMenu() {
    this.bottomSheet.dismiss();
  }
}

// sources to tab selection solution:
// -----------------------------------------------------------------------
// https://stackoverflow.com/questions/61761665/angular-mattabchangeevent-does-not-trigger-on-page-load
// -----------------------------------------------------------------------
// https://stackoverflow.com/questions/50854238/angular-material-5-how-to-call-a-function-when-a-tab-is-selected-clicked
// -----------------------------------------------------------------------
// https://stackblitz.com/edit/angular-q2pgt1?file=app%2Ftabs-overview-example.ts

// sources to bottom sheet on mobile:
// -----------------------------------------------------------------------
// https://stackoverflow.com/questions/49651320/how-to-use-scrollstrategy-in-matdialog

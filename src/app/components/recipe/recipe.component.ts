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
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { Overlay } from '@angular/cdk/overlay';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import { BottomSheetComponent } from '../bottom-sheet/bottom-sheet.component';
import { Observable } from 'rxjs';

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
  selectedTab: string;
  configBottomSheet: MatBottomSheetConfig = {
    closeOnNavigation: true,
    hasBackdrop: true,
    direction: 'ltr',
  };
  isLargeScreen: boolean;
  isIngredientsOpen = false;
  isInstructionsOpen = false;

  @ViewChild('templateBottomSheet') TemplateBottomSheet: TemplateRef<any>;

  constructor(
    private route: ActivatedRoute,
    private recipesService: RecipesService,
    private bottomSheet: MatBottomSheet,
    private bottomSheetRef: MatBottomSheetRef<TemplateRef<any>>,
    private overlay: Overlay,
    public breakpointObserver: BreakpointObserver
  ) {
    // check the size of the screen
    // if large screen, set default tab to "ingredients"
    breakpointObserver.observe(['(max-width: 719px)']).subscribe((result) => {
      if (result.matches) {
        this.isLargeScreen = false;
      } else {
        this.isLargeScreen = true;
        this.selectedTab = "ingredients";
      }
    });
  }

  ngOnInit(): void {
    // save id from get-params
    this.id = this.route.snapshot.paramMap.get('id');
    this.route.data.subscribe((data) => (this.data = data));

    // save recipe details based on id
    this.chosenRecipe = this.recipesService
      .getDetailedRecipe(this.id)
      .subscribe((Recipe) => {
        this.recipe = Recipe;
        this.extendedIngredients = Recipe.extendedIngredients;
      });
  }

  onTabChange(event) {
    this.selectedTab = event.tab.textLabel;
    if (this.selectedTab == 'ingredients') {
      this.isIngredientsOpen = true;
    } else if (this.selectedTab == 'instructions') {
      this.isInstructionsOpen = false;
    }
  }

  openBottomSheet(event) {
    this.selectedTab = event.target.innerText.toLowerCase();
    const scrollStrategy = this.overlay.scrollStrategies.block();

    if (!this.isIngredientsOpen && !this.isInstructionsOpen) {
      this.bottomSheet.open(this.TemplateBottomSheet, { scrollStrategy });
      if (this.selectedTab === 'ingredients') {
        this.isIngredientsOpen = true;
        this.isInstructionsOpen = false;
      } else if (this.selectedTab === 'instructions') {
        this.isIngredientsOpen = false;
        this.isInstructionsOpen = true;
      }
    } else if (this.isIngredientsOpen) {
      if (this.selectedTab === 'ingredients') {
        this.bottomSheet.dismiss();
        this.isIngredientsOpen = false;
      } else if (this.selectedTab === 'instructions') {
        this.isIngredientsOpen = false;
        this.isInstructionsOpen = true;
      }
    } else if (this.isInstructionsOpen) {
      if (this.selectedTab === 'ingredients') {
        this.isIngredientsOpen = true;
        this.isInstructionsOpen = false;
      } else if (this.selectedTab === 'instructions') {
        this.bottomSheet.dismiss();
        this.isInstructionsOpen = false;
      }
    }
    // console.log(`Ingredients-tab is ${this.isIngredientsOpen}, instructions-tab is {this.isInstructionsOpen} and selected tab is ${this.selectedTab}`);
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

// sources to breakpoint-observer/solution:
// -----------------------------------------------------------------------
// https://material.angular.io/cdk/layout/api#Breakpoints
// https://www.techiediaries.com/angular/responsive-image-breakpoints-cdk-breakpointobserver-angular-9-8/

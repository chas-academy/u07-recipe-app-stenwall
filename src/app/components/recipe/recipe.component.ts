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
    breakpointObserver.observe(['(max-width: 719px)']).subscribe((result) => {
      if (result.matches) {
        this.isLargeScreen = false;
      } else {
        this.isLargeScreen = true;
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

    // run on init to make "ingredient" the deafult tab
    // this.onTabChange();

    // this.bottomSheetRef
    //   .afterOpened()
    //   .pipe(() => (this.bottomSheetRef = undefined));

    // this.bottomSheetRef.afterOpened().subscribe((result) => {
    //   this.isTabOpen = true;
    //   console.log('widgetEditorModal has been opened!');
    // });
  }

  // onTabChange(event) {
  //   this.selectedTab = event.tab.textLabel;
  //   this.onTabChange();
  // }

  setTab(event) {
    console.log(event);
  }

  onTabChange(event) {
    this.selectedTab = event.tab.textLabel;
    if (this.selectedTab == 'ingredients') {
      this.isIngredientsOpen = true;
    } else if (this.selectedTab == 'instructions') {
      this.isInstructionsOpen = false;
    }
  }


  onChange() {
    if (this.selectedTab == 'ingredients') {
      this.isIngredientsOpen = true;
    } else if (this.selectedTab == 'instructions') {
      this.isInstructionsOpen = true;
    }
  }

  openBottomSheet() {
    const scrollStrategy = this.overlay.scrollStrategies.block();
  }

  // openBottomSheet() {
  //   const scrollStrategy = this.overlay.scrollStrategies.close();
  //   this.bottomSheet.open(BottomSheetComponent, scrollStrategy);
  // }

  openBottomSheetTest(event) {
    console.log(event.target.innerText);
    this.selectedTab = event.target.innerText.toLowerCase();
    console.log(this.selectedTab);
    const scrollStrategy = this.overlay.scrollStrategies.block();
    console.log(
      `Ingredients-tab is ${this.isIngredientsOpen}, instructions-tab is ${this.isInstructionsOpen} and selected tab is ${this.selectedTab}`
    );
    // this.bottomSheetRef.afterOpened().subscribe((result) => {
    //   console.log(result);
    //   console.log('Bottom sheet has been opened.');
    // });
    // if (!this.isBottomSheetOpen) {
    //   this.bottomSheet.open(this.TemplateBottomSheet, { scrollStrategy });
    //   this.isBottomSheetOpen = true;
    // } else if (this.isBottomSheetOpen) {
    //   this.bottomSheet.dismiss();
    //   this.isBottomSheetOpen = false;
    // } else {
    //   this.bottomSheet.open(this.TemplateBottomSheet, { scrollStrategy });
    //   this.isBottomSheetOpen = true;
    // }
    if (!this.isIngredientsOpen && this.selectedTab === 'ingredients') {
      this.bottomSheet.open(this.TemplateBottomSheet, { scrollStrategy });
      this.isIngredientsOpen = true;
      console.log(
        `Ingredients-tab is ${this.isIngredientsOpen}, instructions-tab is ${this.isInstructionsOpen} and selected tab is ${this.selectedTab}`
      );
    } else if (this.isIngredientsOpen && this.selectedTab === 'ingredients') {
      this.bottomSheet.dismiss();
      this.isIngredientsOpen = false;
      console.log(
        `Ingredients-tab is ${this.isIngredientsOpen}, instructions-tab is ${this.isInstructionsOpen} and selected tab is ${this.selectedTab}`
      );
    } else if (this.isIngredientsOpen && this.selectedTab === 'instructions') {
      this.isInstructionsOpen = true;
      this.isIngredientsOpen = false;
      console.log(
        `Ingredients-tab is ${this.isIngredientsOpen}, instructions-tab is ${this.isInstructionsOpen} and selected tab is ${this.selectedTab}`
      );
    } else if (this.isInstructionsOpen && this.selectedTab === 'ingredients') {
      this.isInstructionsOpen = false;
      this.isIngredientsOpen = true;
      console.log(
        `Ingredients-tab is ${this.isIngredientsOpen}, instructions-tab is ${this.isInstructionsOpen} and selected tab is ${this.selectedTab}`
      );
    } else if (
      !this.isInstructionsOpen &&
      this.selectedTab === 'instructions'
    ) {
      this.bottomSheet.open(this.TemplateBottomSheet, { scrollStrategy });
      this.isInstructionsOpen = true;
      console.log(
        `Ingredients-tab is ${this.isIngredientsOpen}, instructions-tab is ${this.isInstructionsOpen} and selected tab is ${this.selectedTab}`
      );
    } else if (this.isInstructionsOpen && this.selectedTab === 'instructions') {
      this.bottomSheet.dismiss();
      this.isInstructionsOpen = false;
      console.log(
        `Ingredients-tab is ${this.isIngredientsOpen}, instructions-tab is ${this.isInstructionsOpen} and selected tab is ${this.selectedTab}`
      );
    }
    // } else (!this.isInstructionsOpen && !this.isIngredientsOpen && this.selectedTab === undefined) {

    // }
  }

  closeBottomSheet() {
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

// sources to breakpoint-observer/solution:
// -----------------------------------------------------------------------
// https://material.angular.io/cdk/layout/api#Breakpoints
// https://www.techiediaries.com/angular/responsive-image-breakpoints-cdk-breakpointobserver-angular-9-8/

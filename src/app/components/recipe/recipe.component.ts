import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  MatBottomSheet,
  MatBottomSheetConfig,
} from '@angular/material/bottom-sheet';
import { Overlay } from '@angular/cdk/overlay';
import { BreakpointObserver } from '@angular/cdk/layout';
import {
  Recipe,
  ExtendedIngredient,
  AnalyzedInstruction,
  Step,
} from 'src/app/models/api-spoonacular.model';
import { RecipesService } from '../../services/recipes.service';
import { ListService } from 'src/app/services/list.service';
import { Subscription } from 'rxjs';
import { FormControl } from '@angular/forms';

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
  analyzedInstructions: AnalyzedInstruction[] = [];
  steps: Step[] = [];
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
  isRecipeInList = false;

  @ViewChild('templateBottomSheet') TemplateBottomSheet: TemplateRef<any>;

  constructor(
    private route: ActivatedRoute,
    private recipesService: RecipesService,
    private bottomSheet: MatBottomSheet,
    private overlay: Overlay,
    public breakpointObserver: BreakpointObserver,
    private listService: ListService
  ) {
    // check the size of the screen
    // if large screen, set default tab to "ingredients"
    breakpointObserver.observe(['(max-width: 719px)']).subscribe((result) => {
      if (result.matches) {
        this.isLargeScreen = false;
      } else {
        this.isLargeScreen = true;
        this.selectedTab = 'ingredients';
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
        this.analyzedInstructions = Recipe.analyzedInstructions;
        this.steps = Recipe.analyzedInstructions[0].steps;
      });
  }

  onTabChange(event): void {
    this.selectedTab = event.tab.textLabel;
    if (this.selectedTab == 'ingredients') {
      this.isIngredientsOpen = true;
    } else if (this.selectedTab == 'instructions') {
      this.isInstructionsOpen = false;
    }
  }

  // isRecipeSaved(): boolean {
  //   return this.listService.checkIfRecipeInList(this.recipe.id);
  // }

  // addRecipeToList(): void {
  //   this.listService.addToList(
  //     this.recipe.id,
  //     this.recipe.user_id,
  //     this.recipe.title,
  //     this.recipe.image
  //   );
  // }

  // removeRecipeFromList(): void {
  //   this.listService.removeFromList(this.recipe.id);
  // }

  openBottomSheet(event): void {
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
  }

  closeBottomSheet(): void {
    this.bottomSheet.dismiss();
    this.isIngredientsOpen = false;
    this.isInstructionsOpen = false;
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
// https://stackblitz.com/edit/angular-kfpaa2?file=app%2Fbottom-sheet-overview-example.ts
// https://material.angular.io/cdk/overlay/overview#scroll-strategies
// https://github.com/angular/components/tree/master/src/material/bottom-sheet
// https://netbasal.com/creating-powerful-components-with-angular-cdk-2cef53d81cea
// https://blog.thoughtram.io/angular/2017/11/20/custom-overlays-with-angulars-cdk.html
// https://stackoverflow.com/questions/47882427/how-do-i-add-a-position-strategy-to-an-angular-cdk-overlay
// https://stackoverflow.com/questions/52432447/angular-cdk-understanding-the-overlay-position-system

// sources to breakpoint-observer/solution:
// -----------------------------------------------------------------------
// https://material.angular.io/cdk/layout/api#Breakpoints
// https://www.techiediaries.com/angular/responsive-image-breakpoints-cdk-breakpointobserver-angular-9-8/

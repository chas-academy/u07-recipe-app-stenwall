import {
  Component,
  Input,
  OnChanges,
  SimpleChanges, OnInit,
  Output,
  EventEmitter,
} from '@angular/core';
import { Recipe } from 'src/app/models/api-spoonacular.model';
import { ListService } from '../../services/list.service';
import { RecipesService } from '../../services/recipes.service';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss'],
})
export class RecipeCardComponent implements OnInit {
  @Input()
  data: Recipe[];
  // @Output() changePreferences = new EventEmitter<Recipe>();
  showRecipes: Recipe[];

  constructor(
    // private route: ActivatedRoute,
    // private recipesService: RecipesService,
    private listService: ListService
  ) {}

  ngOnInit(): void {
    this.showRecipes = this.data;
  }

  ngOnChanges(changes: SimpleChanges) {
    // only run when property "data" changed
    if (changes['data']) {
      this.showRecipes = this.data;
    }
  }

  addRecipeToList(id, title, image) {
    this.listService.addToList(id, title, image);
  }

  // onRecipePreferenceChange() {
  //   this.changePreferences.emit(this.SelectedTimeZone);
  // }
}

// source to getting input updates from parent:
// -----------------------------------------------------------------------
// https://www.digitalocean.com/community/tutorials/3-ways-to-pass-async-data-to-angular-2-child-components

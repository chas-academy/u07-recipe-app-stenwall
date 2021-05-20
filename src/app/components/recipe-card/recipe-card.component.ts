import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  OnInit,
} from '@angular/core';
import { Recipe } from 'src/app/models/api-spoonacular.model';
import { ListService } from '../../services/list.service';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss'],
})
export class RecipeCardComponent implements OnInit, OnChanges {
  @Input() data: Recipe[];

  showRecipes: Recipe[];

  constructor(private listService: ListService) {}

  ngOnInit(): void {
    this.showRecipes = this.data;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data']) {
      this.showRecipes = this.data;
    }
  }

  addRecipeToList(event: any, id: number, title: string, image: string): void {
    event.stopPropagation();
    this.listService.addToList(id, title, image);
  }

  removeRecipeFromList(event: any, id: number): void {
    event.stopPropagation();
    this.listService.removeFromList(id);
  }

  isRecipeSaved(id: number): boolean {
    return this.listService.checkIfRecipeInList(id);
  }
}

// source to getting input updates from parent:
// -----------------------------------------------------------------------
// https://www.digitalocean.com/community/tutorials/3-ways-to-pass-async-data-to-angular-2-child-components

import { Component, Input, OnChanges, SimpleChanges, OnInit } from '@angular/core';
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

  constructor(
    private listService: ListService
  ) {}

  ngOnInit(): void {
    this.showRecipes = this.data;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['data']) {
      this.showRecipes = this.data;
    }
  }

  addRecipeToList(event, id, title, image) {
    event.stopPropagation();
    this.listService.addToList(id, title, image);
  }
}

// source to getting input updates from parent:
// -----------------------------------------------------------------------
// https://www.digitalocean.com/community/tutorials/3-ways-to-pass-async-data-to-angular-2-child-components

import { Component, Input, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/api-spoonacular.model';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss'],
})
export class RecipeCardComponent implements OnInit, OnChanges {
  @Input() data: Recipe[];

  recipes: Recipe[];

  constructor( ) {}

  ngOnInit(): void {
    this.recipes = this.data;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data']) {
      this.recipes = this.data;
    }
  }
}

// source to getting input updates from parent:
// -----------------------------------------------------------------------
// https://www.digitalocean.com/community/tutorials/3-ways-to-pass-async-data-to-angular-2-child-components

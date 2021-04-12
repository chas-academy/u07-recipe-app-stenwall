export interface ApiData {
  hits: Array<Hit>;
}

export interface Hit {
  recipe: Recipe;
}

export interface Recipe {
  label: string; // recipe title
  image: string; // image url
  yield: number; // number of servings
  ingredientLines: Array<string>;
  healthLabels?: Array<string>;
  cautions?: Array<string>;
  cuisineType?: string;
  mealType?: string;
  dishType?: string;
}

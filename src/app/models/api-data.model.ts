export interface ApiData {
  hits: Hit[];
}

export interface Hit {
  recipe: Recipe;
}

export interface Recipe {
  label: string; // recipe title
  image: string; // image url
  yield: number; // number of servings
  ingredientLines: string[]; // each string = type + amount
  healthLabels?: string[]; // eg milk-free, gluten-free
  cautions?: string[]; // eg milk, soy, nuts
  cuisineType?: string; // eg chinese, indian
  mealType?: string; // eg  lunch, dinner, breakfast, snack
  dishType?: string; // eg dessert, soup, salad, sandwich
}

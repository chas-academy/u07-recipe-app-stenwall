export interface Recipe {
  label: string; // recipe title
  image: string; // image url
  yield: number; // number of servings
  // ingredients: Ingredient[];
  healthLabels?: healthLabels; // enum
  // cautions?: array[];
  cuisineType?: string;
  mealType?: string;
  dishType?: string;
}

export enum healthLabels {
  vegan = 'vegan',
  vegetarian = 'vegetarian',
  'dairy-free' = 'dairy-free',
  'gluten-free' = 'gluten-free',
  'wheat-free' = 'wheat-free', 
  'egg-free' = 'egg-free',
  'peanut-free' = 'peanut-free',
  'tree-nut-free' = 'tree-nut-free', 
  'soy-free' = 'soy-free',
}
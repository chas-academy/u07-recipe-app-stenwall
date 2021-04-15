export interface SpoonacularApiData {
  results: Recipe[];
}

export interface Recipe {
  id: number;
  title: string;
  readyInMinutes: number;
  servings: number;
  image: string;
  vegetarian?: boolean;
  vegan?: boolean;
  glutenFree?: boolean;
  dairyFree?: boolean;
  sourceName: string;
  extendedIngredients: ExtendedIngredient[];
  summary: string;
  cuisines?: string[];
  dishTypes: string[];
  diets?: string[];
  instructions: string;
  analyzedInstructions: AnalyzedInstruction[];
  ingredientString: string[];
}

export interface ExtendedIngredient {
  id: number;
  aisle?: string;
  image: string;
  name: string; // eg green cabbage
  nameClean: string; // cabbage
  originalString: string; // eg "15 oz can white beans, drained and rinsed"
  amount: number;
  unit: string; // oz, g, tsb etc
  measures: Measures;
}

export interface Measures {
  us: Us;
  metric: Metric;
}

export interface Us {
  amount: number;
  unitShort: string;
  unitLong: string;
}

export interface Metric {
  amount: number;
  unitShort: string;
  unitLong: string;
}

export interface AnalyzedInstruction {
  steps: Step[];
}

export interface Step {
  number: number;
  step: string;
  ingredients: Ingredient[];
  equipment: Equipment[];
  length: Length;
}

export interface Ingredient {
  id: number;
  name: string;
  localizedName: string;
  // image: string;
}

export interface Equipment {
  id: number;
  name: string;
  localizedName: string;
  // image: string;
}

export interface Length {
  number: number;
  unit: string;
}

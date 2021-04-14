export interface SpoonacularApiData {
  results: SpoonRecipe[];
}

export interface SpoonRecipe {
  id: number;
  title: string;
  readyInMinutes: number;
  servings: number;
  image: string;
  vegetarian: boolean;
  vegan: boolean;
  glutenFree: boolean;
  dairyFree: boolean;
  cheap: boolean;
  sustainable: boolean;
  sourceName: string;
  extendedIngredients: ExtendedIngredient[];
  summary: string;
  cuisines?: string[];
  dishTypes: string[];
  diets?: string[];
  instructions: string;
  analyzedInstructions: AnalyzedInstruction[];
}

export interface ExtendedIngredient {
  id: number;
  aisle?: string;
  image: string;
  name: string;
  nameClean: string;
  originalString: string;
  amount: number;
  unit: string;
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

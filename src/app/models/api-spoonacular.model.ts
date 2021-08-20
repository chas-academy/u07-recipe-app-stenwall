export interface SpoonacularApiData {
  results: Recipe[];
}

export interface SpoonacularRandomApiData {
  recipes: Recipe[];
}

export interface Recipe {
  id: number;
  title: string;
  readyInMinutes: number;
  image: string;
  vegetarian?: boolean;
  vegan?: boolean;
  glutenFree?: boolean;
  dairyFree?: boolean;
  extendedIngredients: ExtendedIngredient[];
  dishTypes: string[];
  diets?: string[];
  analyzedInstructions: AnalyzedInstruction[];
}

export interface ExtendedIngredient {
  id: number;
  originalString: string;
}

export interface AnalyzedInstruction {
  steps: Step[];
}

export interface Step {
  number: number;
  step: string;
}

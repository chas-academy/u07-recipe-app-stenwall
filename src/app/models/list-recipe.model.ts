export interface ListRecipeData {
  recipes: ListRecipe[];
}

export interface ListRecipe {
  id?: number;
  api_id: number;
  title: string;
  img: string;
}

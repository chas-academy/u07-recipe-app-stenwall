export interface ListRecipeData {
    recipes: ListRecipe[];
}

export interface ListRecipe {
    id: number;
    api_id: number;
    title: string;
    img: string;
    pivot: {
          recipe_list_id: number;
          recipe_id: number;
    }
}
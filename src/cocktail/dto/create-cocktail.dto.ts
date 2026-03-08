import { Ingredient } from "src/ingredient/entities/ingredient.entity";

export class CreateCocktailDto {
    name: string;
    category: string;
    instruction: string,
    ingredients: Ingredient[]
}

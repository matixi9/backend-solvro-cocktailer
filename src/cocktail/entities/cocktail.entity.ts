import { Ingredient } from "src/ingredient/entities/ingredient.entity";

export class Cocktail {
    id: number;
    name: string;
    category: string;
    instruction: string,
    ingredients: Ingredient[]
}

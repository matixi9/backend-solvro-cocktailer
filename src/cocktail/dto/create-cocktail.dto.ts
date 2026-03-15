import { IsNotEmpty, IsString } from "class-validator";
import { Ingredient } from "src/ingredient/entities/ingredient.entity";

export class CreateCocktailDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    
    category: string;
    instruction: string;
    ingredients: Ingredient[];
}

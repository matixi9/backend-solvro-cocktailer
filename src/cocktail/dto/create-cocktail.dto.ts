import { IsNotEmpty, IsString } from "class-validator";
import { CocktailIngredient } from "src/cocktail-ingredient/entities/cocktail-ingredient.entity";

export class CreateCocktailDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    category: string;

    @IsString()
    @IsNotEmpty()
    instruction: string;

    @IsNotEmpty()
    ingredients: CocktailIngredient[];
}

import { IsNotEmpty, IsString } from 'class-validator';
import { Cocktail } from 'src/cocktail/entities/cocktail.entity';
import { Ingredient } from 'src/ingredient/entities/ingredient.entity';

export class CreateCocktailIngredientDto {
  @IsString()
  @IsNotEmpty()
  amount: string;

  @IsNotEmpty()
  cocktail: Cocktail;

  @IsNotEmpty()
  ingredient: Ingredient;
}

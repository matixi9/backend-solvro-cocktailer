import { PartialType } from '@nestjs/mapped-types';
import { CreateCocktailIngredientDto } from './create-cocktail-ingredient.dto';

export class UpdateCocktailIngredientDto extends PartialType(CreateCocktailIngredientDto) {}

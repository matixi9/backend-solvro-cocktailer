import { Module } from '@nestjs/common';
import { CocktailIngredientService } from './cocktail-ingredient.service';
import { CocktailIngredientController } from './cocktail-ingredient.controller';

@Module({
  controllers: [CocktailIngredientController],
  providers: [CocktailIngredientService],
})
export class CocktailIngredientModule {}

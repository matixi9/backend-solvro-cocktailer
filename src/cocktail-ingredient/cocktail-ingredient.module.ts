import { Module } from '@nestjs/common';
import { CocktailIngredientService } from './cocktail-ingredient.service';
import { CocktailIngredientController } from './cocktail-ingredient.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CocktailIngredient } from './entities/cocktail-ingredient.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CocktailIngredient])],
  controllers: [CocktailIngredientController],
  providers: [CocktailIngredientService],
})
export class CocktailIngredientModule {}

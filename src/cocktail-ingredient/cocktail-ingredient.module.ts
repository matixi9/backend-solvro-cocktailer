import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CocktailIngredient } from './entities/cocktail-ingredient.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CocktailIngredient])],
})
export class CocktailIngredientModule {}

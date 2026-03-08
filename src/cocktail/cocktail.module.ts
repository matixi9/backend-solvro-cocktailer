import { Module } from '@nestjs/common';
import { CocktailService } from './cocktail.service';
import { CocktailController } from './cocktail.controller';

@Module({
  controllers: [CocktailController],
  providers: [CocktailService],
})
export class CocktailModule {}

import { Injectable } from '@nestjs/common';
import { CreateCocktailIngredientDto } from './dto/create-cocktail-ingredient.dto';
import { UpdateCocktailIngredientDto } from './dto/update-cocktail-ingredient.dto';

@Injectable()
export class CocktailIngredientService {
  create(createCocktailIngredientDto: CreateCocktailIngredientDto) {
    return 'This action adds a new cocktailIngredient';
  }

  findAll() {
    return `This action returns all cocktailIngredient`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cocktailIngredient`;
  }

  update(id: number, updateCocktailIngredientDto: UpdateCocktailIngredientDto) {
    return `This action updates a #${id} cocktailIngredient`;
  }

  remove(id: number) {
    return `This action removes a #${id} cocktailIngredient`;
  }
}

import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CocktailIngredientService } from './cocktail-ingredient.service';
import { CreateCocktailIngredientDto } from './dto/create-cocktail-ingredient.dto';
import { UpdateCocktailIngredientDto } from './dto/update-cocktail-ingredient.dto';

@Controller('cocktail-ingredient')
export class CocktailIngredientController {
  constructor(private readonly cocktailIngredientService: CocktailIngredientService) {}

  @Post()
  create(@Body() createCocktailIngredientDto: CreateCocktailIngredientDto) {
    return this.cocktailIngredientService.create(createCocktailIngredientDto);
  }

  @Get()
  findAll() {
    return this.cocktailIngredientService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cocktailIngredientService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCocktailIngredientDto: UpdateCocktailIngredientDto) {
    return this.cocktailIngredientService.update(+id, updateCocktailIngredientDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cocktailIngredientService.remove(+id);
  }
}

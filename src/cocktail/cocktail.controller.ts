import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { CocktailService } from './cocktail.service';
import { CreateCocktailDto } from './dto/create-cocktail.dto';
import { UpdateCocktailDto } from './dto/update-cocktail.dto';

@Controller('cocktail')
export class CocktailController {
  constructor(private readonly cocktailService: CocktailService) {}

  @Post()
  create(@Body() createCocktailDto: CreateCocktailDto) {
    return this.cocktailService.create(createCocktailDto);
  }

  @Get()
  findAll(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
    @Query('search') search?: string,
    @Query('category') category?: string
  ) {
    return this.cocktailService.findAll(page, limit, search, category);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cocktailService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCocktailDto: UpdateCocktailDto) {
    return this.cocktailService.update(+id, updateCocktailDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cocktailService.remove(+id);
  }
}

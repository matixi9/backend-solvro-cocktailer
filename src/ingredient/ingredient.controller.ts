import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { IngredientService } from './ingredient.service';
import { CreateIngredientDto } from './dto/create-ingredient.dto';
import { UpdateIngredientDto } from './dto/update-ingredient.dto';
import { ApiQuery } from '@nestjs/swagger';

@Controller('ingredient')
export class IngredientController {
  constructor(private readonly ingredientService: IngredientService) {}

  @Post()
  create(@Body() createIngredientDto: CreateIngredientDto) {
    return this.ingredientService.create(createIngredientDto);
  }

  @Get()
  @ApiQuery({
    name: 'page',
    required: true,
    type: 'number',
    description: 'Page number',
  })
  @ApiQuery({
    name: 'limit',
    required: true,
    type: 'number',
    description: 'Searches per page',
  })
  @ApiQuery({
    name: 'search',
    required: false,
    type: 'string',
    description: 'Filter by name',
  })
  @ApiQuery({
    name: 'isAlcoholic',
    required: false,
    type: Boolean,
    description: 'Is ingredient alcoholic',
  })
  findAll(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
    @Query('search') search?: string,
    @Query('isAlcoholic') isAlcoholic?: string,
  ) {
    return this.ingredientService.findAll(page, limit, search, isAlcoholic);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ingredientService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateIngredientDto: UpdateIngredientDto,
  ) {
    return this.ingredientService.update(+id, updateIngredientDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ingredientService.remove(+id);
  }
}

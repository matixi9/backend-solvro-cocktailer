import { Injectable } from '@nestjs/common';
import { CreateCocktailIngredientDto } from './dto/create-cocktail-ingredient.dto';
import { UpdateCocktailIngredientDto } from './dto/update-cocktail-ingredient.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CocktailIngredient } from './entities/cocktail-ingredient.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CocktailIngredientService {

constructor(
  @InjectRepository(CocktailIngredient)
  private cocktailIngredientRepository: Repository<CocktailIngredient>,
) {}

  async create(createCocktailIngredientDto: CreateCocktailIngredientDto): Promise<CocktailIngredient> {
    const newCocktailIngredient = this.cocktailIngredientRepository.create(createCocktailIngredientDto);
    return await this.cocktailIngredientRepository.save(newCocktailIngredient);
  }

  async findAll(): Promise<CocktailIngredient[]> {
    return `This action returns all cocktailIngredient`;
  }

  async findOne(id: number): Promise<CocktailIngredient> {
    return `This action returns a #${id} cocktailIngredient`;
  }

  async update(id: number, updateCocktailIngredientDto: UpdateCocktailIngredientDto): Promise<CocktailIngredient> {
    return `This action updates a #${id} cocktailIngredient`;
  }

  async remove(id: number): Promise<CocktailIngredient> {
    return `This action removes a #${id} cocktailIngredient`;
  }
}

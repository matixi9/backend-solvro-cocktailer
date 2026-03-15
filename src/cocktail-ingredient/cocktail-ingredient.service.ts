import { Injectable, NotFoundException } from '@nestjs/common';
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

  async findAll(page: number, limit: number): Promise<any> {
    const skip = (page - 1) * limit;
    const [data, total] = await this.cocktailIngredientRepository.findAndCount({
      skip: skip,
      take: limit,
      relations: ['cocktail', 'ingredient'],
    });

    return {
      data,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit)
    };
  }

  async findOne(id: number): Promise<CocktailIngredient> {
    const cocktailIngredient = await this.cocktailIngredientRepository.findOneBy({id});
    if (!cocktailIngredient) {
      throw new NotFoundException ("Nie znaleziono danego składnika");
    }
    return cocktailIngredient
  }

  async update(id: number, UpdateCocktailIngredientDto: UpdateCocktailIngredientDto): Promise<CocktailIngredient> {
    const cocktailIngredient = await this.findOne(id);
    const updatedCocktailIngredient = this.cocktailIngredientRepository.merge(cocktailIngredient, UpdateCocktailIngredientDto);
    return await this.cocktailIngredientRepository.save(updatedCocktailIngredient);
  }

  async remove(id: number): Promise<void> {
    const cocktailIngredient = await this.findOne(id);
    await this.cocktailIngredientRepository.remove(cocktailIngredient);
  }
}
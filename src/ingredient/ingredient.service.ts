import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateIngredientDto } from './dto/create-ingredient.dto';
import { UpdateIngredientDto } from './dto/update-ingredient.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Ingredient } from './entities/ingredient.entity';
import { Repository } from 'typeorm';

@Injectable()
export class IngredientService {

  constructor(
    @InjectRepository(Ingredient)
    private ingredientRepository: Repository<Ingredient>,
  ) {}

  async create(createIngredientDto: CreateIngredientDto): Promise<Ingredient> {
    const newIngredient = this.ingredientRepository.create(createIngredientDto);
    return await this.ingredientRepository.save(newIngredient);
  }

  async findAll(): Promise<Ingredient[]> {
    return await this.ingredientRepository.find();
  }

  async findOne(id: number): Promise<Ingredient> {
    const cocktail = await this.ingredientRepository.findOneBy({id});
    if (!cocktail) {
      throw new NotFoundException ("Nie znaleziono danego składnika");
    }
    return cocktail
  }

  async update(id: number, updateIngredientDto: UpdateIngredientDto): Promise<Ingredient> {
    const ingredient = await this.findOne(id);
    const updatedIngredient = this.ingredientRepository.merge(ingredient, updateIngredientDto);
    return await this.ingredientRepository.save(updatedIngredient);
  }

  async remove(id: number): Promise<void> {
    const ingredient = await this.findOne(id);
    await this.ingredientRepository.remove(ingredient);
  }
}

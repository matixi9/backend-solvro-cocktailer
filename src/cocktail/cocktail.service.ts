import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCocktailDto } from './dto/create-cocktail.dto';
import { UpdateCocktailDto } from './dto/update-cocktail.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Cocktail } from './entities/cocktail.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CocktailService {

  constructor(
    @InjectRepository(Cocktail)
    private cocktailRepository: Repository<Cocktail>,
  ) {}

  async create(createCocktailDto: CreateCocktailDto): Promise<Cocktail> {
    const newCocktail = this.cocktailRepository.create(createCocktailDto);
    return await this.cocktailRepository.save(newCocktail);
  }

  async findAll(): Promise<Cocktail[]> {
    return await this.cocktailRepository.find();
  }

  async findOne(id: number): Promise<Cocktail> {
    const cocktail = await this.cocktailRepository.findOneBy({id});
    if (!cocktail) {
      throw new NotFoundException('Nie znaleziono koktajlu :c');
    }
    return cocktail
  }

  async update(id: number, updateCocktailDto: UpdateCocktailDto): Promise<Cocktail> {
    const cocktail = await this.findOne(id);
    const updatedCocktail = this.cocktailRepository.merge(cocktail, updateCocktailDto);
    return await this.cocktailRepository.save(updatedCocktail);
  }

  async remove(id: number): Promise<void> {
    const cocktail = await this.findOne(id);
    await this.cocktailRepository.remove(cocktail);
  }
}

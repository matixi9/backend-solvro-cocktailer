import { Injectable, NotFoundException, Search } from '@nestjs/common';
import { CreateCocktailDto } from './dto/create-cocktail.dto';
import { UpdateCocktailDto } from './dto/update-cocktail.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Cocktail } from './entities/cocktail.entity';
import { ILike, Repository } from 'typeorm';

@Injectable()
export class CocktailService {

  constructor(
    @InjectRepository(Cocktail)
    private cocktailRepository: Repository<Cocktail>,
  ) {}

  async create(createCocktailDto: CreateCocktailDto, user: any) {
    const newCocktail = this.cocktailRepository.create({...createCocktailDto, author: {id: user.userId}});
    return await this.cocktailRepository.save(newCocktail);
  }

  async findAll(page: number, limit: number, search?: string, category?: string): Promise<any> {
    const skip = (page - 1) * limit;

    const where: any = {};
    if (search) {
      where.name = ILike(`%${search}%`);
    }

    if (category) {
      where.category = ILike(`%${category}%`);
    }

    const [data, total] = await this.cocktailRepository.findAndCount({
      where: where,
      skip: skip,
      take: limit,
      relations: ['ingredients', 'ingredients.ingredient'],
      order: {name: 'ASC'}
    })

    return {
      data,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit)
    };
  }

  async findOne(id: number): Promise<Cocktail> {
    const cocktail = await this.cocktailRepository.findOne({
      where: {id},
      relations: ['ingredients', 'ingredients.ingredient']
    });
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

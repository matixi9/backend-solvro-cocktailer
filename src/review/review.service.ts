import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Review } from './entities/review.entity';
import { Repository } from 'typeorm';
import { Cocktail } from 'src/cocktail/entities/cocktail.entity';

@Injectable()
export class ReviewService {

  constructor(
    @InjectRepository(Review)
    private reviewRepository: Repository<Review>,
    @InjectRepository(Cocktail)
    private cocktailRepository: Repository<Cocktail>,
  ) {}

  async create(createReviewDto: CreateReviewDto, user: any) {
    const cocktail = await this.cocktailRepository.findOne({
      where: {id: createReviewDto.cocktailId},
    });

    if (!cocktail) {
      throw new NotFoundException(`Cocktail with ${createReviewDto.cocktailId} does not exist`);
    }

    const newReview = this.reviewRepository.create({
      rating: createReviewDto.rating,
      content: createReviewDto.content,
      author: {id: user.userId},
      cocktail: {id: cocktail.id},
    });

    return await this.reviewRepository.save(newReview);
  }

  async findOne(id: number) {
    const cocktail = await this.cocktailRepository.findOne({
      where: {id},
      relations: ['ingredients', 'ingredients.ingredient', 'author', 'reviews', 'reviews.author'],
    });

    if (!cocktail) {
      throw new NotFoundException(`Not found cocktail with ${id} ID`);
    }

    return cocktail;
  }
}

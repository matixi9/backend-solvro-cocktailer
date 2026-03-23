import { IsNotEmpty, IsString } from 'class-validator';
import { CocktailIngredient } from 'src/cocktail-ingredient/entities/cocktail-ingredient.entity';
import { ApiProperty } from '@nestjs/swagger';
import { CreateCocktailIngredientDto } from '../../cocktail-ingredient/dto/create-cocktail-ingredient.dto';

export class CreateCocktailDto {
  @ApiProperty({
    example: 'Martini',
    description: 'Cocktail name',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: 'Alcoholic',
    description: 'Cocktail category',
  })
  @IsString()
  @IsNotEmpty()
  category: string;

  @ApiProperty({
    example: 'Buy martini in supermarket and pour it into your glass',
    description: 'Instruction how to make a cocktail',
  })
  @IsString()
  @IsNotEmpty()
  instruction: string;

  @ApiProperty({
    type: [CreateCocktailIngredientDto],
    example: [
      { ingredientId: 1, amount: '50ml' },
      { ingredientId: 2, amount: 'half lemon' },
      { ingredientId: 3, amount: '1 spoon of a sugar' },
    ],
    description: 'List of ingredients with their amounts',
  })
  @IsNotEmpty()
  ingredients: CocktailIngredient[];
}

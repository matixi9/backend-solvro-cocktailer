import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCocktailIngredientDto {
  @ApiProperty({ example: 1, description: 'ID of an existing ingredient' })
  @IsNumber()
  @IsNotEmpty()
  ingredientId: number;

  @ApiProperty({ example: '50 ml', description: 'Amount' })
  @IsString()
  @IsNotEmpty()
  amount: string;
}

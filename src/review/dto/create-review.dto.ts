import { IsInt, IsNotEmpty, IsString, Max, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateReviewDto {
  @ApiProperty({
    example: '1',
    description: 'Rating value',
  })
  @IsInt()
  @Min(1, { message: 'Rating cannot be lower than 1' })
  @Max(5, { message: 'Rating cannot be higher than 5' })
  rating: number;

  @ApiProperty({
    example: 'This drink was awful',
    description: 'Description for a review',
  })
  @IsString()
  @IsNotEmpty()
  content: string;

  @ApiProperty({
    example: '4',
    description: 'Id of a cocktail',
  })
  @IsInt()
  @IsNotEmpty()
  cocktailId: number;
}

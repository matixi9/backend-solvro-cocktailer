import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateIngredientDto {
  @ApiProperty({
    example: 'Lemon',
    description: 'Ingredient name',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: 'Its just a lemon',
    description: 'Description of an ingredient',
  })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({
    example: 'FALSE',
    description: 'Boolean value if ingredient is alcoholic',
  })
  @IsBoolean()
  @IsNotEmpty()
  isAlcoholic: boolean;

  @ApiProperty({
    example: 'https://rum.jpg',
    description: 'URL to a photo',
  })
  @IsString()
  @IsNotEmpty()
  photo: string;
}

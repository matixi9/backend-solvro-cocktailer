import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class CreateIngredientDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsBoolean()
  @IsNotEmpty()
  isAlcoholic: boolean;

  @IsString()
  @IsNotEmpty()
  photo: string;
}

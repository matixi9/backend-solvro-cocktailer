import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    example: 'john.pork@gmail.com',
    description: 'Email address',
  })
  @IsEmail({}, { message: 'Enter correct email' })
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    example: '123123',
    description: 'User password',
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(6, { message: 'Password has to be atleast 6 letters long' })
  password: string;
}

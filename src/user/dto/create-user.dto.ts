import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateUserDto {
    @IsEmail({}, {message: 'Enter correct email'})
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(6,{message: 'Password has to be atleast 6 letters long'})
    password: string;
}

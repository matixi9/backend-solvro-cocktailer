import { IsIn, IsInt, IsNotEmpty, IsString, Max, Min } from "class-validator";

export class CreateReviewDto {
    @IsInt()
    @Min(1, {message: 'Rating cannot be lower than 1'})
    @Max(5, {message: 'Rating cannot be higher than 5'})
    rating: number;

    @IsString()
    @IsNotEmpty()
    content: string;

    @IsInt()
    @IsNotEmpty()
    cocktailId: number;
}

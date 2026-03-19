import { CocktailIngredient } from "src/cocktail-ingredient/entities/cocktail-ingredient.entity";
import { Review } from "src/review/entities/review.entity";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Cocktail {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    category: string;

    @Column()
    instruction: string;

    @OneToMany(() => CocktailIngredient, (cocktailIngredient) => cocktailIngredient.cocktail, {cascade: true})
    ingredients: CocktailIngredient[];

    @ManyToOne(() => User, (user) => user.cocktails)
    author: User;

    @OneToMany(() => Review, (review) => review.cocktail)
    reviews: Review[];
}

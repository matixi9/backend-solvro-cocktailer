import { CocktailIngredient } from "src/cocktail-ingredient/entities/cocktail-ingredient.entity";
import { Ingredient } from "src/ingredient/entities/ingredient.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

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
}

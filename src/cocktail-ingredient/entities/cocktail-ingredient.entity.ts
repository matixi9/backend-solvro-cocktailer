import { Cocktail } from "src/cocktail/entities/cocktail.entity";
import { Ingredient } from "src/ingredient/entities/ingredient.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ManyToMany } from "typeorm/browser";

@Entity()
export class CocktailIngredient {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    amount: string;
    
    @ManyToOne(() => Cocktail, cocktail => cocktail.ingredients, {onDelete: 'CASCADE'})
    cocktail: Cocktail;

    @ManyToOne(() => Ingredient, {onDelete: 'CASCADE'})
    ingredient: Ingredient;
}

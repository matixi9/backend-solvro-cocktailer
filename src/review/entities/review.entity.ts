import { Cocktail } from 'src/cocktail/entities/cocktail.entity';
import { User } from 'src/user/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Review {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  rating: number;

  @Column()
  content: string;

  @ManyToOne(() => User, (user) => user.reviews)
  author: User;

  @ManyToOne(() => Cocktail, (cocktail) => cocktail.reviews, {
    onDelete: 'CASCADE',
  })
  cocktail: Cocktail;
}

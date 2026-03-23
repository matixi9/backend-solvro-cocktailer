import { Cocktail } from 'src/cocktail/entities/cocktail.entity';
import { Review } from 'src/review/entities/review.entity';
import { Column, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Entity } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ default: 'user' })
  role: string;

  @OneToMany(() => Cocktail, (cocktail) => cocktail.author)
  cocktails: Cocktail[];

  @OneToMany(() => Review, (review) => review.author)
  reviews: Review[];
}

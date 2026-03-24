import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CocktailModule } from './cocktail/cocktail.module';
import { IngredientModule } from './ingredient/ingredient.module';
import { CocktailIngredientModule } from './cocktail-ingredient/cocktail-ingredient.module';
import { Cocktail } from './cocktail/entities/cocktail.entity';
import { Ingredient } from './ingredient/entities/ingredient.entity';
import { CocktailIngredient } from './cocktail-ingredient/entities/cocktail-ingredient.entity';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { AuthModule } from './auth/auth.module';
import { ReviewModule } from './review/review.module';
import { Review } from './review/entities/review.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'haslo',
      database: 'cocktailer_db',
      entities: [Cocktail, Ingredient, CocktailIngredient, User, Review],
      synchronize: true,
    }),
    CocktailModule,
    IngredientModule,
    CocktailIngredientModule,
    UserModule,
    AuthModule,
    ReviewModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

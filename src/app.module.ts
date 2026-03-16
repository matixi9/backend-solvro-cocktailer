import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CocktailModule } from './cocktail/cocktail.module';
import { IngredientModule } from './ingredient/ingredient.module';
import { CocktailIngredientModule } from './cocktail-ingredient/cocktail-ingredient.module';
import { Cocktail } from './cocktail/entities/cocktail.entity';
import { Ingredient } from './ingredient/entities/ingredient.entity';
import { CocktailIngredient } from './cocktail-ingredient/entities/cocktail-ingredient.entity';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'haslo',
      database: 'cocktailer_db',
      entities: [Cocktail, Ingredient, CocktailIngredient, User],
      synchronize: true,
    }),
    CocktailModule, 
    IngredientModule, 
    CocktailIngredientModule, UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
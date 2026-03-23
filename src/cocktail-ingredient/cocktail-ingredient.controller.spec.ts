import { Test, TestingModule } from '@nestjs/testing';
import { CocktailIngredientController } from './cocktail-ingredient.controller';
import { CocktailIngredientService } from './cocktail-ingredient.service';

describe('CocktailIngredientController', () => {
  let controller: CocktailIngredientController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CocktailIngredientController],
      providers: [CocktailIngredientService],
    }).compile();

    controller = module.get<CocktailIngredientController>(
      CocktailIngredientController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

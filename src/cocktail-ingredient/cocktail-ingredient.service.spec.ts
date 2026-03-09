import { Test, TestingModule } from '@nestjs/testing';
import { CocktailIngredientService } from './cocktail-ingredient.service';

describe('CocktailIngredientService', () => {
  let service: CocktailIngredientService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CocktailIngredientService],
    }).compile();

    service = module.get<CocktailIngredientService>(CocktailIngredientService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

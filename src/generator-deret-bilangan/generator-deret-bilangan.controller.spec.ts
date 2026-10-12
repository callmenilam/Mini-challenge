import { Test, TestingModule } from '@nestjs/testing';
import { GeneratorDeretBilanganController } from './generator-deret-bilangan.controller.js';
import { GeneratorDeretBilanganService } from './generator-deret-bilangan.service.js';

describe('GeneratorDeretBilanganController', () => {
  let controller: GeneratorDeretBilanganController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GeneratorDeretBilanganController],
      providers: [GeneratorDeretBilanganService],
    }).compile();

    controller = module.get<GeneratorDeretBilanganController>(GeneratorDeretBilanganController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

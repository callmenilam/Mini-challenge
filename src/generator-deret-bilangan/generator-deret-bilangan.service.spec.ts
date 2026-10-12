import { Test, TestingModule } from '@nestjs/testing';
import { GeneratorDeretBilanganService } from './generator-deret-bilangan.service.js';

describe('GeneratorDeretBilanganService', () => {
  let service: GeneratorDeretBilanganService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GeneratorDeretBilanganService],
    }).compile();

    service = module.get<GeneratorDeretBilanganService>(GeneratorDeretBilanganService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

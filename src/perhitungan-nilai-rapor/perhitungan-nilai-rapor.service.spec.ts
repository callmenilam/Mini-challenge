import { Test, TestingModule } from '@nestjs/testing';
import { PerhitunganNilaiRaporService } from './perhitungan-nilai-rapor.service.js';

describe('PerhitunganNilaiRaporService', () => {
  let service: PerhitunganNilaiRaporService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PerhitunganNilaiRaporService],
    }).compile();

    service = module.get<PerhitunganNilaiRaporService>(PerhitunganNilaiRaporService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

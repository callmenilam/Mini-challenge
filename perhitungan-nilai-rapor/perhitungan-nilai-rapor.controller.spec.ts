import { Test, TestingModule } from '@nestjs/testing';
import { PerhitunganNilaiRaporController } from './perhitungan-nilai-rapor.controller.js';
import { PerhitunganNilaiRaporService } from './perhitungan-nilai-rapor.service.js';

describe('PerhitunganNilaiRaporController', () => {
  let controller: PerhitunganNilaiRaporController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PerhitunganNilaiRaporController],
      providers: [PerhitunganNilaiRaporService],
    }).compile();

    controller = module.get<PerhitunganNilaiRaporController>(PerhitunganNilaiRaporController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

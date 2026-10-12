import { Module } from '@nestjs/common';
import { PerhitunganNilaiRaporService } from './perhitungan-nilai-rapor.service.js';
import { PerhitunganNilaiRaporController } from './perhitungan-nilai-rapor.controller.js';

@Module({
  controllers: [PerhitunganNilaiRaporController],
  providers: [PerhitunganNilaiRaporService],
})
export class PerhitunganNilaiRaporModule {}

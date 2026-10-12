import { Body, Controller, Post } from '@nestjs/common';
import { PerhitunganNilaiRaporService } from './perhitungan-nilai-rapor.service.js';
import { HitungNilaiRaporDto } from './dto/hitung nilai rapor.dto.js';

@Controller('perhitungan-nilai-rapor')
export class PerhitunganNilaiRaporController {
  constructor(private readonly perhitunganNilaiRaporService: PerhitunganNilaiRaporService) {}
  @Post()
  hitungNilai(@Body() dto: HitungNilaiRaporDto) {
    return this.perhitunganNilaiRaporService.hitungNilai(
      dto.nama,
      dto.tugas,
      dto.uts,
      dto.uas,
    );
  }
}

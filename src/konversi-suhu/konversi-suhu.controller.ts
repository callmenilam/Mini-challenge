import { Controller, Get, ParseFloatPipe, Query } from '@nestjs/common';
import { KonversiSuhuService } from './konversi-suhu.service.js';

@Controller('konversi-suhu')
export class KonversiSuhuController {
  constructor(private readonly konversiSuhuService: KonversiSuhuService) {}
  @Get()
  konversi(
    @Query('nilai', ParseFloatPipe) nilai: number,
    @Query('dari') dari: string,
    @Query('ke') ke: string,
  ) {
    return {
      nilaiAsal: nilai,
      dari,
      ke,
      hasil: this.konversiSuhuService.konversiSuhu(
        nilai,
        dari,
        ke,
      ),
    };
  }
}

import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { CekBilanganService } from './cek-bilangan.service.js';

@Controller('cek-bilangan')
export class CekBilanganController {
  constructor(private readonly cekBilanganService: CekBilanganService) {}
  @Get('bilangan/:angka')
  cekBilangan(
    @Param('angka', ParseIntPipe) angka: number,
  ) {
    return this.cekBilanganService.countBilangan(angka);
  }
}

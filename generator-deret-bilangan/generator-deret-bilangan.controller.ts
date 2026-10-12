import { Controller, DefaultValuePipe, Get, ParseIntPipe, Query } from '@nestjs/common';
import { GeneratorDeretBilanganService } from './generator-deret-bilangan.service.js';

@Controller('generator-deret-bilangan')
export class GeneratorDeretBilanganController {
  constructor(private readonly generatorDeretBilanganService: GeneratorDeretBilanganService) {}
  @Get()
  getDeret(
    @Query('jenis') jenis: string,
    @Query('jumlah', ParseIntPipe) jumlah: number,
    @Query('urutan', new DefaultValuePipe('asc'))
    urutan: string,
  ) {
    return this.generatorDeretBilanganService.getDeret(jenis, jumlah, urutan);
  }
}

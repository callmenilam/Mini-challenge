import { Module } from '@nestjs/common';
import { GeneratorDeretBilanganService } from './generator-deret-bilangan.service.js';
import { GeneratorDeretBilanganController } from './generator-deret-bilangan.controller.js';

@Module({
  controllers: [GeneratorDeretBilanganController],
  providers: [GeneratorDeretBilanganService],
})
export class GeneratorDeretBilanganModule {}

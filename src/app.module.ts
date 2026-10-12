import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { BooksModule } from './books/books.module.js';
import { CekBilanganModule } from './cek-bilangan/cek-bilangan.module.js';
import { GeneratorDeretBilanganModule } from './generator-deret-bilangan/generator-deret-bilangan.module.js';
import { KasirTokoModule } from './kasir-toko/kasir-toko.module.js';
import { KonversiSuhuModule } from './konversi-suhu/konversi-suhu.module.js';
import { PerhitunganNilaiRaporModule } from './perhitungan-nilai-rapor/perhitungan-nilai-rapor.module.js';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [
    // Distributed tracing, auto-correlated logs, request/job metrics, error
    // telemetry, alarms, and more — out of the box. Sign up at https://observe.nestjs.com
    ObserveModule.forRoot({
      appKey: 'YOUR_APP_KEY',
      appSecret: 'YOUR_APP_SECRET',
      serviceId: 'my-nest-js',
    }),
    BooksModule,
    CekBilanganModule,
    GeneratorDeretBilanganModule,
    KasirTokoModule,
    KonversiSuhuModule,
    PerhitunganNilaiRaporModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

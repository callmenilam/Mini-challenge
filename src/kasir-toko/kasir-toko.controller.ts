import { Body, Controller, Post } from '@nestjs/common';
import { KasirTokoService } from './kasir-toko.service.js';
import { CheckoutKasirDto } from './dto/checkout.dto.js';

@Controller('kasir-toko')
export class KasirTokoController {
  constructor(private readonly kasirTokoService: KasirTokoService) {}
  @Post('checkout')
  checkout(@Body() dto: CheckoutKasirDto) {
    return this.kasirTokoService.checkout(
      dto.member,
      dto.metode,
      dto.items,
    );
  }
}

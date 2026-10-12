import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class CekBilanganService {
    countBilangan(angka: number) {
    if (!Number.isFinite(angka) || angka <= 0) {
      throw new BadRequestException(
        'Angka harus lebih besar dari 0',
      );
    }

    return {
      genap: angka % 2 === 0,
      kuadrat: angka * angka,
      kelipatan5: angka % 5 === 0,
    };
  }
}

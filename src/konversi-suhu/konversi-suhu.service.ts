import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class KonversiSuhuService {
      konversiSuhu(
    nilai: number,
    dari: string,
    ke: string,
  ): number {
    const satuan = ['celsius', 'fahrenheit', 'kelvin'];

    dari = dari.toLowerCase();
    ke = ke.toLowerCase();

    if (
      !Number.isFinite(nilai) ||
      !satuan.includes(dari) ||
      !satuan.includes(ke)
    ) {
      throw new BadRequestException(
        'Nilai atau satuan suhu tidak valid',
      );
    }

    let celsius: number;

    if (dari === 'celsius') {
      celsius = nilai;
    } else if (dari === 'fahrenheit') {
      celsius = (nilai - 32) * 5 / 9;
    } else {
      celsius = nilai - 273.15;
    }

    if (ke === 'celsius') {
      return Number(celsius.toFixed(2));
    }

    if (ke === 'fahrenheit') {
      return Number(
        (celsius * 9 / 5 + 32).toFixed(2),
      );
    }

    return Number((celsius + 273.15).toFixed(2));
  }
}

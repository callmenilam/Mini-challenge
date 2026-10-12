import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class GeneratorDeretBilanganService {
     getDeret(
    jenis: string,
    jumlah: number,
    urutan = 'asc',
  ) {
    jenis = jenis.toLowerCase();
    urutan = urutan.toLowerCase();

    if (!['ganjil', 'genap', 'kuadrat'].includes(jenis)) {
      throw new BadRequestException(
        'Jenis harus ganjil, genap, atau kuadrat',
      );
    }

    if (
      !Number.isInteger(jumlah) ||
      jumlah < 1 ||
      jumlah > 100
    ) {
      throw new BadRequestException(
        'Jumlah harus bilangan bulat 1 sampai 100',
      );
    }

    if (!['asc', 'desc'].includes(urutan)) {
      throw new BadRequestException(
        'Urutan harus asc atau desc',
      );
    }

    const data: number[] = [];

    for (let i = 1; i <= jumlah; i++) {
      if (jenis === 'ganjil') {
        data.push(2 * i - 1);
      } else if (jenis === 'genap') {
        data.push(2 * i);
      } else {
        data.push(i * i);
      }
    }

    if (urutan === 'desc') {
      data.reverse();
    }

    return {
      jenis,
      jumlah,
      urutan,
      data,
      total: data.reduce((total, nilai) => total + nilai, 0),
    };
  }
}

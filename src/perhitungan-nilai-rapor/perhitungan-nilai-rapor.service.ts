import { Injectable } from '@nestjs/common';

@Injectable()
export class PerhitunganNilaiRaporService {
    hitungNilai(
    nama: string,
    tugas: number[],
    uts: number,
    uas: number,
  ) {
    const rataTugas =
      tugas.reduce((total, nilai) => total + nilai, 0) /
      tugas.length;

    const nilaiAkhir = Math.round(
      (rataTugas * 0.3 + uts * 0.3 + uas * 0.4) * 100,
    ) / 100;

    let predikat: string;

    if (nilaiAkhir >= 90) {
      predikat = 'A';
    } else if (nilaiAkhir >= 80) {
      predikat = 'B';
    } else if (nilaiAkhir >= 70) {
      predikat = 'C';
    } else {
      predikat = 'D';
    }

    return {
      nama,
      rataTugas: Math.round(rataTugas * 100) / 100,
      nilaiAkhir,
      predikat,
      status: nilaiAkhir >= 75 ? 'Lulus' : 'Remedial',
    };
  }
}

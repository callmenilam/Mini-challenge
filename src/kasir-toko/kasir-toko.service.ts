import { BadRequestException, Injectable } from '@nestjs/common';
import { ItemKasirDto } from './dto/item kasir.dto.js';

@Injectable()
export class KasirTokoService {
      checkout(
    member: string,
    metode: string,
    items:ItemKasirDto [],
  ) {
    member = member.toLowerCase();
    metode = metode.toLowerCase();

    if (!['reguler', 'silver', 'gold'].includes(member)) {
      throw new BadRequestException(
        'Member harus reguler, silver, atau gold',
      );
    }

    if (!['tunai', 'qris'].includes(metode)) {
      throw new BadRequestException(
        'Metode harus tunai atau qris',
      );
    }

    if (
      !Array.isArray(items) ||
      items.length < 1 ||
      items.length > 10
    ) {
      throw new BadRequestException(
        'Items harus berisi 1 sampai 10 item',
      );
    }

    let subtotal = 0;
    let totalQty = 0;

    const rincian = items.map((item) => {
      const totalItem = item.harga * item.qty;
      subtotal += totalItem;
      totalQty += item.qty;

      return {
        nama: item.nama,
        harga: item.harga,
        qty: item.qty,
        subtotal: totalItem,
      };
    });

    const diskonMember = {
      reguler: 0,
      silver: 5,
      gold: 10,
    };

    const diskon =
      subtotal *
      diskonMember[member as keyof typeof diskonMember] / 100;

    const setelahDiskon = subtotal - diskon;

    const biayaAdmin = metode === 'qris'
      ? Math.round(setelahDiskon * 0.01)
      : 0;

    const total = setelahDiskon + biayaAdmin;

    return {
      member,
      metode,
      rincian,
      totalItem: totalQty,
      subtotal,
      diskon,
      biayaAdmin,
      total,
    };
  }
}

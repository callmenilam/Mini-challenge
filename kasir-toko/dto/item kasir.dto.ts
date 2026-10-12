import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsInt,
  Min,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ItemKasirDto {
  @IsString()
  @IsNotEmpty()
  nama: string;

  @Type(() => Number)
  @IsNumber()
  @Min(0.01)
  harga: number;

  @Type(() => Number)
  @IsInt()
  @Min(1)
  qty: number;
}
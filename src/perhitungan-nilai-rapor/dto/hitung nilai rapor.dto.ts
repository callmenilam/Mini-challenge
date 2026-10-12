import {
  IsArray,
  ArrayMinSize,
  IsNumber,
  IsString,
  IsNotEmpty,
  Min,
  Max,
} from 'class-validator';
import { Type } from 'class-transformer';

export class HitungNilaiRaporDto {
  @IsString()
  @IsNotEmpty()
  nama: string;

  @IsArray()
  @ArrayMinSize(1)
  @Type(() => Number)
  @IsNumber({}, { each: true })
  @Min(0, { each: true })
  @Max(100, { each: true })
  tugas: number[];

  @Type(() => Number)
  @IsNumber()
  @Min(0)
  @Max(100)
  uts: number;

  @Type(() => Number)
  @IsNumber()
  @Min(0)
  @Max(100)
  uas: number;
}
import {
  IsString,
  IsIn,
  IsArray,
  ArrayMinSize,
  ArrayMaxSize,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ItemKasirDto } from './item kasir.dto.js';

export class CheckoutKasirDto {
  @IsString()
  @IsIn(['reguler', 'silver', 'gold'])
  member: string;

  @IsString()
  @IsIn(['tunai', 'qris'])
  metode: string;

  @IsArray()
  @ArrayMinSize(1)
  @ArrayMaxSize(10)
  @ValidateNested({ each: true })
  @Type(() => ItemKasirDto)
  items: ItemKasirDto[];
}
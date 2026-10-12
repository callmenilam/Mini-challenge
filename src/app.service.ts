import { BadRequestException, Injectable } from '@nestjs/common';
import { error } from 'console';
import { NOTINITIALIZED } from 'dns';

@Injectable()
export class AppService {
  getBilangan(angkaNumber: number) {
    throw new Error('Method not implemented.');
  }
  getHello(): string {
    return 'Hello World!';
  }

  getGreeting(name: string): string{
    return `Hello, ${name}!`;
  }

   checkAge(age: number) {
    if (age < 10) {
      return 'Kamu masih balita/anak-anak';
    } else if (age <= 17) {
      return 'Kamu masih remaja';
    } else {
      return 'Kamu sudah dewasa';
    }
  }
  getBMI(weight: number, height: number): string{
     // Validasi 
    if(height <= 0 || weight <= 0){
      return 'Invalid input';
    }
    if (isNaN(weight) || isNaN(height)) {
      return 'Invalid input'
    }
    // Calculate BMI
    const bmi = weight / (height * height);
    let category: string ="";
    if(bmi <18.5){
        category = 'Underweight';
    }else if (bmi >= 18.5 && bmi <24.9){
       category = 'Normal weight';
    } else if (bmi >= 25 && bmi <29.9){
      category = 'Overweight';
    }else{
      category ='Obesity';
    }
    return `Your BMI is ${bmi.toFixed(2)} (${category})`;
  }
  countLuasBalok (panjang: number, lebar: number): number{
    if (panjang <= 0 || lebar <=0){
      throw new Error ('Panjang dan Lebar harus lebih besar dari 0');
    }
    return panjang * lebar;
  }
  countBelahKetupat(d1: number, d2: number, sisi: number): 
  { luas: number, keliling: number}{
    if(d1 <= 0 || d2 <= 0){
      throw new Error ('Diagonal harus lebih besar dari 0');
    }
    const luas = (d1 * d2) / 2;
    const keliling = 4 * sisi;
    const result ={
      luas: luas,
      keliling: keliling,
    };
    return result;
  }
}
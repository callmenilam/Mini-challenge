import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { AppService } from './app.service.js';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get(`greeting/:name`)
  getGreeting(@Param(`name`) name: string): string{
    return this.appService.getGreeting(name);
  }
   @Get('age/:age')
    checkAge(@Param('age') age: string) {
    return this.appService.checkAge(Number(age));
  }
   @Get('bmi')
   getBMI(@Query('weight') weight: string, @Query('height') height: string): string{
    const weightNumber = parseFloat (weight);
    const heightNumber = parseFloat (height);
    if(isNaN(weightNumber) || isNaN(heightNumber)){
      return 'Invalid input';
    }
    return this.appService.getBMI(weightNumber, heightNumber);
   }

   @Post('luas-balok')
   countLuasBalok(@Body('panjang') panjang: number, @Body('lebar') lebar :number ): number {
    return this.appService.countLuasBalok(panjang, lebar);
   }
  }
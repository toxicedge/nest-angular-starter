import { Controller, Get } from '@nestjs/common';
import { AppService } from '../services/app.service';

@Controller('api')
export class ApiController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

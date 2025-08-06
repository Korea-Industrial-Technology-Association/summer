import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { AttendStatus } from '@koita/shared';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('status')
  getStatus(): { status: string; attendStatuses: typeof AttendStatus } {
    return this.appService.getStatus();
  }
}

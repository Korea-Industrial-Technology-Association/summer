import { Injectable } from '@nestjs/common';
import { AttendStatus } from '@koita/shared';

@Injectable()
export class AppService {
  getHello(): string {
    return 'KOITA Summer Forum Backend API';
  }

  getStatus(): { status: string; attendStatuses: typeof AttendStatus } {
    return {
      status: 'OK',
      attendStatuses: AttendStatus,
    };
  }
}

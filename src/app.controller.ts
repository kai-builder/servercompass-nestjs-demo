import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('home')
  root() {
    const envs = this.appService.getPublicEnvs();
    return {
      title: 'Server Compass Demo Environment Variables',
      envs,
      envKeys: envs.map((e) => e.key).join(', '),
    };
  }

  @Get('api/env')
  getEnv() {
    return { envs: this.appService.getPublicEnvs() };
  }

  @Get('health')
  health() {
    return { status: 'ok', service: 'servercompass-nestjs-demo' };
  }
}

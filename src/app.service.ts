import { Injectable } from '@nestjs/common';

const PUBLIC_KEYS = ['APP_NAME', 'API_URL', 'ENVIRONMENT', 'VERSION'];

@Injectable()
export class AppService {
  getPublicEnvs() {
    return PUBLIC_KEYS.map((key) => {
      const value = process.env[key]?.trim() || 'Not set';
      return { key, value, isNotSet: value === 'Not set' };
    });
  }
}

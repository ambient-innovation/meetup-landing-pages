import { djangoCologneConfig } from './django-cologne';
import { cologneJsConfig } from './cologne-js';
import type { MeetupConfig } from './types';

export const meetups: Record<string, MeetupConfig> = {
  'django-cologne': djangoCologneConfig,
  'cologne-js': cologneJsConfig
};

export const getMeetupConfig = (id: string): MeetupConfig | undefined => {
  return meetups[id];
}; 
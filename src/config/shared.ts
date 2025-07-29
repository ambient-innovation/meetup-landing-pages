import type { MeetupTheme, ContactLocation, OtherMeetup as MeetupConfig } from './types';
import { format, startOfMonth, addMonths, addDays, getDay, nextTuesday } from 'date-fns';

// Common location for CologneJS events (and potentially others)
export const ambientInnovationOffice: ContactLocation = {
  venue: 'Ambient Innovation Office',
  address: 'Oskar-Jäger-Str. 173, 50825 Köln',
  directions: 'See Map below'
};

// Common theme elements that can be spread into a complete theme
export const commonThemeElements = {
  background: '#000000',    // Pure black background
  text: '#FFFFFF',          // White text
  textSecondary: '#CCCCCC'  // Light gray text
};

// Cross-references between meetups
export const cologneJS: MeetupConfig = {
  name: 'CologneJS',
  description: 'JavaScript & Web Development Community',
  url: 'https://colognejs.ambient.digital',
  logo: import.meta.env.BASE_URL + '/colognejs/logo.svg',
  ogImage: import.meta.env.BASE_URL + '/colognejs/og.png'
};

export const djangoCologne: MeetupConfig = {
  name: 'Django Cologne',
  description: 'Python Web Development Meetup',
  url: 'https://djangocologne.ambient.digital',
  logo: import.meta.env.BASE_URL + '/djangocologne/logo.svg',
  ogImage: import.meta.env.BASE_URL + '/djangocologne/og.png'
};

// Date utility functions

// Find the second Tuesday of the next month (for CologneJS)
export const findSecondTuesdayOfNextMonth = () => {
  const now = new Date();
  const firstDayOfNextMonth = startOfMonth(addMonths(now, 1));
  
  const firstDayWeekday = getDay(firstDayOfNextMonth);
  if (firstDayWeekday === 2) {
    const secondTuesday = addDays(firstDayOfNextMonth, 7);
    return format(secondTuesday, 'yyyy-MM-dd');
  } else {
    const firstTuesday = nextTuesday(firstDayOfNextMonth);
    const secondTuesday = addDays(firstTuesday, 7);
    return format(secondTuesday, 'yyyy-MM-dd');
  }
};

// Find the third Tuesday of the next month (for Django Cologne)
export const findThirdTuesdayOfNextMonth = () => {
  const now = new Date();
  const firstDayOfNextMonth = startOfMonth(addMonths(now, 1));
  
  const firstDayWeekday = getDay(firstDayOfNextMonth);
  if (firstDayWeekday === 2) {
    const thirdTuesday = addDays(firstDayOfNextMonth, 14);
    return format(thirdTuesday, 'yyyy-MM-dd');
  } else {
    const firstTuesday = nextTuesday(firstDayOfNextMonth);
    const thirdTuesday = addDays(firstTuesday, 14);
    return format(thirdTuesday, 'yyyy-MM-dd');
  }
};

// Generate event title helper
export const generateEventTitle = (meetupName: string, date: string) => {
  const eventDate = new Date(date);
  return `${meetupName} - ${eventDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })} edition`;
};

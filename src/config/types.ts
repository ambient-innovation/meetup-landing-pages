export interface MeetupTheme {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
  textSecondary: string;
}

export interface MeetupMeta {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  twitterCard?: string;
  logo: string;
}

export interface NextEvent {
  date: string;
  title: string;
  location: string;
  registrationUrl?: string;
  time?: string;
  address?: string;
  description?: string;
}

export interface PastEvent {
  date: string;
  title: string;
  image?: string;
}

export interface ContactLocation {
  venue: string;
  address: string;
  directions?: string;
}

export interface OtherMeetup {
  name: string;
  description: string;
  url: string;
  logo: string;
  ogImage: string;
}

export interface MeetupContent {
  name: string;
  tagline: string;
  description: string;
  nextEvent?: NextEvent;
  about: {
    title: string;
    content: string;
  };
  pastEvents?: PastEvent[];
  contact: {
    website?: string;
    meetup?: string;
    twitter?: string;
    linkedin?: string;
    email?: string;
    discord?: string;
    location?: ContactLocation;
  };
  otherMeetups?: OtherMeetup[];
}

export interface MeetupConfig {
  id: string;
  meta: MeetupMeta;
  theme: MeetupTheme;
  content: MeetupContent;
} 
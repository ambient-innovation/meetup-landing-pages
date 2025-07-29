import type { MeetupConfig } from './types';
import { 
  findSecondTuesdayOfNextMonth, 
  generateEventTitle, 
  commonThemeElements, 
  ambientInnovationOffice,
  djangoCologne,
  cologneJS
} from './shared';

export const cologneJsConfig: MeetupConfig = {
  id: 'cologne-js',
  meta: {
    title: 'CologneJS - JavaScript & Web Development Meetup',
    description: 'Join the CologneJS community for JavaScript, Node.js, and modern web development discussions in Cologne, Germany.',
    keywords: ['JavaScript', 'Node.js', 'Web Development', 'Cologne', 'Meetup', 'Frontend', 'Backend'],
    ogImage: cologneJS.ogImage,
    twitterCard: 'summary_large_image',
    logo: cologneJS.logo
  },
  theme: {
    primary: '#F7DF1E',       // JavaScript yellow
    secondary: '#FFE55C',     // Lighter yellow
    accent: '#323330',        // Dark gray/black
    ...commonThemeElements
  },
  content: {
    name: 'CologneJS',
    tagline: 'JavaScript & Web Development Community',
    description: 'CologneJS brings together JavaScript enthusiasts from all backgrounds - whether you\'re into React, Vue, Angular, Node.js, or vanilla JavaScript.',
    nextEvent: {
      date: findSecondTuesdayOfNextMonth(),
      title: generateEventTitle('CologneJS', findSecondTuesdayOfNextMonth()),
      location: ambientInnovationOffice.venue,
      registrationUrl: 'https://www.meetup.com/de-DE/cologne-js/',
      time: '18:30',
      address: ambientInnovationOffice.address,
      description: 'Talks and topics will be announced via Meetup.com and on our Discord. There will be a lean coffee session after the talks.'
    },
    about: {
      title: 'What is CologneJS?',
      content: 'CologneJS is a vibrant community of JavaScript developers in Cologne and the surrounding area. We meet regularly to share knowledge, discuss the latest trends in web development, and network with fellow developers. Whether you\'re a beginner or an expert, everyone is welcome!'
    },
    pastEvents: [
      {
        date: '2024-01-15',
        title: 'Building Scalable React Applications',
        image: import.meta.env.BASE_URL + '/images/past-event-1.jpg'
      },
      {
        date: '2023-12-18',
        title: 'Node.js Performance Optimization',
        image: import.meta.env.BASE_URL + '/images/past-event-2.jpg'
      }
    ],
    contact: {
      website: 'https://colognejs.de',
      meetup: 'https://www.meetup.com/de-DE/cologne-js/',
      discord: 'https://discord.gg/colognejs',
      location: ambientInnovationOffice
    },
    otherMeetups: [djangoCologne]
  }
}; 
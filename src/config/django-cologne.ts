import type { MeetupConfig } from './types';
import { 
  findThirdTuesdayOfNextMonth, 
  generateEventTitle, 
  commonThemeElements,
  cologneJS, 
  djangoCologne,
  ambientInnovationOffice
} from './shared';

export const djangoCologneConfig: MeetupConfig = {
  id: 'django-cologne',
  meta: {
    title: `${djangoCologne.name} - ${djangoCologne.description}`,
    description: 'Join the Django Cologne community for Python web development discussions, talks, and networking in Cologne, Germany.',
    keywords: ['Django', 'Python', 'Web Development', 'Cologne', 'Meetup', 'Programming'],
    ogImage: import.meta.env.BASE_URL + djangoCologne.ogImage,
    twitterCard: 'summary_large_image',
    logo: import.meta.env.BASE_URL + djangoCologne.logo
  },
  theme: {
    primary: '#6CD3A1',
    secondary: '#44B78B',     // Lighter green
    accent: '#092C1F',        // Dark green
    ...commonThemeElements
  },
  content: {
    name: djangoCologne.name,
    tagline: djangoCologne.description,
    description: 'Django Cologne is a vibrant community of Python developers passionate about web development using the Django framework.',
    nextEvent: {
      date: findThirdTuesdayOfNextMonth(),
      title: generateEventTitle('Django Cologne', findThirdTuesdayOfNextMonth()),
      location: ambientInnovationOffice.venue,
      registrationUrl: 'https://www.meetup.com/de-DE/koln-django-meetup-gruppe/',
      time: '18:30',
      address: ambientInnovationOffice.address,
      description: 'Join us for an evening of Django discussions, talks, and networking with fellow Python developers.'
    },
    about: {
      title: 'What is Django Cologne?',
      content: 'Django Cologne is a vibrant community of Python developers passionate about web development using the Django framework. We meet regularly to share knowledge, discuss best practices, and network with fellow developers. Whether you\'re new to Django or a seasoned pro, everyone is welcome!'
    },
    pastEvents: [
      {
        date: '2024-01-18',
        title: 'Building Scalable Django APIs',
        image: import.meta.env.BASE_URL + '/images/django-past-event-1.jpg'
      },
      {
        date: '2023-12-21',
        title: 'Django Testing Best Practices',
        image: import.meta.env.BASE_URL + '/images/django-past-event-2.jpg'
      }
    ],
    contact: {
      website: 'https://django-cologne.org',
      meetup: 'https://www.meetup.com/de-DE/koln-django-meetup-gruppe/',
      twitter: 'https://twitter.com/djangocologne',
      email: 'hello@django-cologne.org',
      location: ambientInnovationOffice
    },
    otherMeetups: [cologneJS]
  }
}; 
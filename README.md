# Meetup Landing Pages

This Astro project generates static landing pages for the [DjangoCologne](https://www.meetup.com/de-DE/koln-django-meetup-gruppe/) and [CologneJS](https://www.meetup.com/de-DE/cologne-js/) meetups. It uses an environment variable-driven architecture to build separate static sites with shared designs but different content, colors, and metadata.

## 🏗️ Architecture Overview

### Environment Variable-Based Builds

The project builds different landing pages based on the `MEETUP_ID` environment variable:
- `MEETUP_ID=cologne-js` → CologneJS landing page
- `MEETUP_ID=django-cologne` → Django Cologne landing page

This allows for:
- **Single Codebase**: Maintain one codebase for multiple meetups
- **Separate Deployments**: Deploy to different domains or paths
- **Environment-Specific Builds**: Different CI/CD pipelines per meetup
- **Shared Components**: Reuse design system across meetups

### 📁 Project Structure

```
src/
├── config/                    # Meetup configurations
│   ├── types.ts              # TypeScript interfaces
│   ├── meetups.ts            # Central meetup registry
│   ├── django-cologne.ts     # DjangoCologne configuration
│   └── cologne-js.ts         # CologneJS configuration
├── layouts/
│   └── Layout.astro          # Dynamic layout with meta tags
├── components/
│   ├── LandingPage.astro     # Main landing page template
│   ├── ui/
│   │   └── Button.astro      # Themed button component
│   └── sections/
│       ├── Hero.astro        # AMBIENT × MEETUP branding + event info
│       ├── About.astro       # About section
│       ├── FindUs.astro      # Location and contact information
│       ├── PastMeetups.astro # Past events showcase
│       ├── OtherMeetups.astro# Cross-promotion of other meetups
│       └── Contact.astro     # Social links footer
└── pages/
    └── index.astro           # Environment-driven page (/ route)
```

## ✨ Key Features

### 🎨 Dark Theme Design
- Pure black background (`#000000`) for both meetups
- Meetup-specific accent colors:
  - **CologneJS**: JavaScript yellow (`#F7DF1E`)
  - **Django Cologne**: Django green (`#0C4B33`)
- Modern glassmorphism effects and subtle borders
- Responsive typography and spacing

### 🎭 AMBIENT Branding
- Consistent "AMBIENT × MEETUP" header styling
- Professional, tech-focused aesthetic
- Clean typography with proper letter spacing

### 📱 Complete Landing Page Sections
1. **Hero**: Event information with call-to-action
2. **About**: Meetup description and community info
3. **How to Find Us**: Location, transport, and contact details
4. **Past Meetups**: Event history with visual cards
5. **Other Meetups**: Cross-promotion between communities
6. **Contact**: Social links and final call-to-action

### ⚡ Static Site Generation
- Environment variable determines build output
- SEO-optimized with dynamic meta tags
- Fast loading with no runtime dependencies

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm

### Development

```bash
# Install dependencies
npm install

# Default development (CologneJS)
npm run dev

# Specific meetup development
npm run dev:colognejs    # CologneJS
npm run dev:django       # Django Cologne

# Production builds
npm run build:colognejs  # Build CologneJS site
npm run build:django     # Build Django Cologne site
```

### Environment Variables

Set `MEETUP_ID` to control which meetup configuration to use:

```bash
# For CologneJS
export MEETUP_ID=cologne-js

# For Django Cologne  
export MEETUP_ID=django-cologne
```

## 🌐 Deployment Strategies

### Option 1: Separate Repositories/Deployments

Clone this repository for each meetup and deploy separately:

```bash
# CologneJS deployment
git clone <repo> colognejs-site
cd colognejs-site
echo "MEETUP_ID=cologne-js" > .env
npm run build
# Deploy dist/ to colognejs.de

# Django Cologne deployment  
git clone <repo> django-cologne-site
cd django-cologne-site
echo "MEETUP_ID=django-cologne" > .env
npm run build
# Deploy dist/ to django-cologne.org
```

### Option 2: GitHub Actions with Matrix Builds

Use the provided workflow (`.github/workflows/deploy.yml`) with matrix strategy:

```yaml
strategy:
  matrix:
    meetup: [cologne-js, django-cologne]
env:
  MEETUP_ID: ${{ matrix.meetup }}
```

### Option 3: Manual Builds

```bash
# Build both versions locally
npm run build:colognejs
cp -r dist/ colognejs-dist/

npm run build:django  
cp -r dist/ django-dist/

# Deploy each dist folder to respective domains
```

## 🔧 Configuration Reference

### MeetupConfig Interface

```typescript
interface MeetupConfig {
  id: string;
  meta: MeetupMeta;      // SEO and meta tags
  theme: MeetupTheme;    // Colors and styling  
  content: MeetupContent; // All page content
}
```

### Adding Content

Edit the respective config files:
- `src/config/cologne-js.ts` - CologneJS content
- `src/config/django-cologne.ts` - Django Cologne content

### Theme Customization

Both meetups use a dark theme with meetup-specific accent colors defined in their config files.

## 📝 Content Management

### Adding Past Events

```typescript
// In your meetup config file
pastEvents: [
  {
    date: '2024-01-15',
    title: 'Your Event Title',
    image: '/images/event-photo.jpg' // Optional
  }
]
```

### Updating Next Event

```typescript
nextEvent: {
  date: '2024-02-20',
  title: 'Event Title',
  location: 'Venue Name',
  time: '19:00',
  address: 'Full Address',
  registrationUrl: 'https://meetup.com/link'
}
```

### Cross-Promotion

Each meetup can promote others via the `otherMeetups` array:

```typescript
otherMeetups: [
  {
    name: 'Other Meetup Name',
    description: 'Brief description',
    url: '/other-meetup-url',
    logo: '/images/other-logo.png'
  }
]
```

## 🛠️ Development

### Adding New Meetups

1. Create config file: `src/config/new-meetup.ts`
2. Add to registry: `src/config/meetups.ts`
3. Add build scripts to `package.json`
4. Update deployment workflows

### Customizing Design

- Modify component styles in `src/components/`
- Update theme colors in config files
- Add new sections by creating components and updating `LandingPage.astro`

## 📄 License

MIT License - feel free to use this template for your own meetup communities!

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Test with both meetup configurations
4. Submit a pull request

For questions or suggestions, please open an issue.

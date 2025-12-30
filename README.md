# Rights Navigator

A React application to explore and understand civil, constitutional, and other personal rights and liberties.

## Features

- **Home Page**: Overview and quick access to main sections
- **About Page**: Information about the application and its mission
- **Rights Page**: Explore various fundamental rights
- **Liberty Page**: Learn about personal freedoms and liberties
- **Guidance Page**: Practical guidance on understanding and exercising rights
- **Civil Rights Page**: Information about civil rights protections
- **Constitutional Rights Page**: Details about constitutional amendments and protections

## Tech Stack

- **React 18** - UI library
- **React Router** - Client-side routing
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/       # Reusable components
│   └── Layout.jsx    # Main layout with navigation
├── pages/            # Page components
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Rights.jsx
│   ├── Liberty.jsx
│   ├── Guidance.jsx
│   ├── CivilRights.jsx
│   └── ConstitutionalRights.jsx
├── App.jsx           # Main app component with routing
├── main.jsx          # Entry point
└── index.css         # Global styles with Tailwind
```

## Routes

- `/` - Home page
- `/about` - About page
- `/rights` - Rights overview
- `/liberty` - Liberty information
- `/guidance` - Guidance and resources
- `/civil-rights` - Civil rights information
- `/constitutional-rights` - Constitutional rights information

## License

This project is a clone created with permission from the original owner.


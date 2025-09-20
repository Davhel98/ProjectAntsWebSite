# Project Ants Website

A modern full-stack game showcase website built with Angular (frontend) and Node.js (backend).

## 🚀 Tech Stack

**Frontend:**
- Angular 20 (latest version)
- TypeScript
- SCSS
- Responsive design

**Backend:**
- Node.js
- Express.js
- TypeScript
- RESTful API

## 📁 Project Structure

```
├── frontend/           # Angular application
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/     # Angular components
│   │   │   ├── services/       # API services
│   │   │   └── ...
│   └── ...
├── backend/            # Node.js API server
│   ├── src/
│   │   └── server.ts   # Express server
│   └── ...
├── package.json        # Root package.json with scripts
└── README.md
```

## 🛠️ Development Setup

### Prerequisites
- Node.js (v18+)
- npm

### Installation

1. **Install all dependencies:**
   ```bash
   npm run install:all
   ```

2. **Start development servers:**
   ```bash
   npm start
   ```
   This runs both frontend (port 4200) and backend (port 3000) concurrently.

### Individual Commands

**Frontend only:**
```bash
npm run start:frontend
# or
cd frontend && ng serve
```

**Backend only:**
```bash
npm run start:backend
# or
cd backend && npm run dev
```

**Build for production:**
```bash
npm run build
```

## 🌐 API Endpoints

- `GET /api/health` - API health check
- `GET /api/game-info` - Game information and trailer details
- `GET /api/gallery` - Game screenshots (future)
- `POST /api/contact` - Contact form submission (future)

## 🎮 Features

- **Responsive Design**: Optimized for desktop and mobile devices
- **YouTube Integration**: Game trailer video player
- **Modern Architecture**: Component-based Angular frontend with TypeScript backend
- **API Integration**: RESTful API for dynamic content
- **Extensible Structure**: Ready for Gallery, About, and Contact sections
- **Professional Styling**: Orange branding with smooth animations

## 🔧 Development Notes

- Frontend runs on `http://localhost:4200`
- Backend API runs on `http://localhost:3000`
- CORS is configured for local development
- Hot reload enabled for both frontend and backend

## 📱 Screenshots

**Desktop View:**
![Desktop Screenshot](https://github.com/user-attachments/assets/31935b92-a944-4f3c-abba-8114fdc5f87b)

**Mobile View:**
![Mobile Screenshot](https://github.com/user-attachments/assets/82c78136-d90f-4d53-80bf-d94bfb30cfac)

## 🚀 Deployment

The application is ready for deployment to platforms like:
- Frontend: Vercel, Netlify, GitHub Pages
- Backend: Heroku, DigitalOcean, Railway

## 🎯 Future Enhancements

- Add actual game trailer YouTube video ID
- Implement Gallery section with game screenshots
- Add About Us page with team information
- Create Contact form with backend integration
- Add user authentication (optional)
- Implement content management system

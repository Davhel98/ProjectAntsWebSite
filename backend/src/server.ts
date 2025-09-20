import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(helmet());
app.use(cors());
app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Project Ants API is running',
    timestamp: new Date().toISOString()
  });
});

// Game info endpoint
app.get('/api/game-info', (req, res) => {
  res.json({
    title: 'Project Ants',
    version: '1.0.0',
    features: [
      'Realistic ant colony simulation',
      'Advanced AI behavior',
      'Beautiful 3D graphics',
      'Multiplayer support'
    ],
    trailer: {
      youtubeId: '_aTRBidF26o', // Updated video ID
      title: 'Project Ants Game Trailer'
    }
  });
});

// Gallery endpoint (for future use)
app.get('/api/gallery', (req, res) => {
  res.json({
    images: [
      // Will be populated with actual game screenshots
    ]
  });
});

// Contact endpoint (for future use)
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  
  // Here you would typically save to database or send email
  console.log('Contact form submission:', { name, email, message });
  
  res.json({
    success: true,
    message: 'Thank you for your message! We will get back to you soon.'
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    error: 'Not Found',
    message: 'The requested endpoint does not exist'
  });
});

// Error handler
app.use((error: any, req: any, res: any, next: any) => {
  console.error('Error:', error);
  res.status(500).json({
    error: 'Internal Server Error',
    message: 'Something went wrong on the server'
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Project Ants API server running on port ${PORT}`);
  console.log(`🔗 API Health: http://localhost:${PORT}/api/health`);
});
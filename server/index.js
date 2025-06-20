import express from 'express';
import cors from 'cors';
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
import helmet from 'helmet';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { createContactRouter } from './routes/contact.js';
import { createBlogRouter } from './routes/blog.js';
import { createCoursesRouter } from './routes/courses.js';

// Load environment variables
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Database configuration
const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'sownmark_db',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
};

// Initialize express app
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database connection
let db;

async function connectToDatabase() {
  try {
    db = await mysql.createPool(dbConfig);
    console.log('Connected to MySQL database');
    
    // Initialize routes with database connection
    app.use('/api/contact', createContactRouter(db));
    app.use('/api/blog', createBlogRouter(db));
    app.use('/api/courses', createCoursesRouter(db));
    
  } catch (error) {
    console.error('Failed to connect to the database:', error);
    process.exit(1);
  }
}

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Serve frontend built files
  app.use(express.static(join(__dirname, '../dist')));
  
  // Handle client-side routing
  app.get('*', (req, res) => {
    res.sendFile(join(__dirname, '../dist', 'index.html'));
  });
}

// Start server
app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  await connectToDatabase();
});

// Handle unexpected errors
process.on('unhandledRejection', (err) => {
  console.error('Unhandled Rejection:', err);
});

export default app;
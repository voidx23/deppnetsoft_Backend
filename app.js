import express, { json } from 'express';
import cors from 'cors'; 
const app = express();
import connectDB from './src/config/db.js';
import menuRoutes from './src/routes/menuRoutes.js';
import menuItemRoutes from './src/routes/menuItemRoutes.js';
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(json());

// Enable CORS for all routes
app.use(cors());

// Connect to MongoDB
connectDB();

// Routes
app.use('/menus', menuRoutes);
app.use('/menu-items', menuItemRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

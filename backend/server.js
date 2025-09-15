import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRoutes from './routes/userRoutes.js';

// --- App Configuration ---
const app = express();
const PORT = process.env.PORT || 3001;

// --- Middleware ---
// These MUST come before your routes to ensure the request body is parsed
// and CORS headers are set before the request hits your route handlers.
app.use(express.json()); // Parses incoming JSON requests
app.use(cors());         // Enables Cross-Origin Resource Sharing

// --- API Routes ---
// All routes starting with '/api/user' will be handled by userRoutes
app.use('/api/user', userRoutes);

// A simple root endpoint to check if the server is up
app.get('/', (req, res) => {
  res.status(200).send('Backend server is running!');
});

// --- Start the Server ---
const startServer = async () => {
  try {
    // 1. Connect to the database
    await connectDB();
    // 2. Connect to Cloudinary
    connectCloudinary(); // This function doesn't need await as written

    // 3. Only if database connection is successful, start the server
    app.listen(PORT, () => {
      console.log(`Server is running successfully on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Failed to connect to the database. Server did not start.", error);
    process.exit(1); // Exit the process with an error code
  }
};

// --- Execute the Server Start ---
startServer();
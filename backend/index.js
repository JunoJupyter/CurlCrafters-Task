const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const allRoutes = require('./routes');
// const { authToken } = require('./middleware/authToken'); // Import middleware
dotenv.config();

// Create Express app
const app = express();
const cors = require('cors');

const admin = require('firebase-admin');

// Path to your service account key JSON file
const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

app.use(cors());
app.use(express.json());
app.use('/api/quiz', allRoutes); 

// MongoDB connection
const URI = process.env.MONGO_URI;
mongoose.connect(URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Define port
const PORT = process.env.PORT || 5500;

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

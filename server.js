const express = require('express');
const mongoose = require('mongoose');
const app = express();
const authRoutes = require('./routes/auth');
const authMiddleware = require('./middleware/auth_temp'); // Ensure this path is correct
require('dotenv').config();

// Middleware
app.use(express.json());

// Routes
app.use('/auth', authRoutes);

// Protected route example
app.get('/profile', authMiddleware, (req, res) => {
  res.json({ msg: `Welcome, user with ID ${req.user}` });
});

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Start server
const PORT = process.env.PORT || 5012;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

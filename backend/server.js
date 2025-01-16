require('dotenv').config(); // Load environment variables

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const todoRoutes = require('./routes/todoRoutes');
const connectDB = require('./config/db');

// Connect to MongoDB
connectDB();
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/todos', todoRoutes);

// Start server
const PORT = process.env.PORT;
app.listen(process.env.PORT,()=>{
    console.log(`Backend server running at http://127.0.0.1:${PORT}`);
})



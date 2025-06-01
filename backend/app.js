require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');


const userRoutes = require('./routes/users');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, 'public')));


// Routes
app.use('/users', userRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running at ${process.env.BASE_URL}`);
});

import express, { Application } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import path from 'path';
import dotenv from 'dotenv';
import userRoutes from './routes/users';

dotenv.config();

const app: Application = express();
const PORT: number = parseInt(process.env.PORT || '5000', 10);

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/users', userRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running at ${process.env.BASE_URL || `http://localhost:${PORT}`}`);
});

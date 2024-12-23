import express from 'express'
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import morgan from 'morgan';
import authRoutes from './routes/authRoute.js'
import categoryRoute from './routes/categoryRoutes.js'
import cors from 'cors'

// env
dotenv.config()

// database config
connectDB()

// rest object
const app = express();

// middleware
app.use(cors())
app.use(express.json());
app.use(morgan('dev'));

// API
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/category', categoryRoute);

app.get('/', (req, res) => {
  res.send("<h1>Welcome to e-commerce app</h1>")
})

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => { console.log(`Running on mode ${process.env.MODE} port ${PORT}`) })
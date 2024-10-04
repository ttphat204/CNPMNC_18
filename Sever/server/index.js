// E:\emart\server\index.js
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import './db.js';

import { supplierRouter } from './routes/NhaCungCap.js';

const app = express();

dotenv.config();

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5174',
  credentials: true,
}));
app.use(cookieParser());
app.use('/supplier', supplierRouter);
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', process.env.React_URL);
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

const PORT = process.env.PORT || 3004;
app.listen(PORT, () => {
  console.log(`Server is Running on port ${PORT}`);
});

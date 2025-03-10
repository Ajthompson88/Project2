import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

export const pool = new Pool({
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 5000,
  user: process.env.DB_USER || '//add username//',
  password: process.env.DB_PASSWORD || '//add password//',
  database: process.env.DB_NAME || 'privateeye_db',
});

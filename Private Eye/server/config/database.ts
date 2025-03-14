import { Sequelize } from 'sequelize';
import * as dotenv from 'dotenv';

dotenv.config();

export const sequelize = new Sequelize(
  process.env.DB_NAME || 'privateeye_db',
  process.env.DB_USER || 'username',
  process.env.DB_PASSWORD || 'password',
  {
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 5432,
    dialect: 'postgres',
  }
);
import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize(process.env.DATABASE_URL || 'sqlite::memory:', {
    dialect: process.env.DB_DIALECT as any || 'postgres',
    logging: false,
});

export { sequelize };
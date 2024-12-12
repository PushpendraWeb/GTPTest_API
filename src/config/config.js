import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const config = {
    DB_HOST: process.env.DB_HOST || 'kartitechdb.ccjfdjycfuj2.ap-south-1.rds.amazonaws.com',
    DB_USER: process.env.DB_USER || 'admin',
    DB_PASSWORD: process.env.DB_PASSWORD || 'Kratitech666',
    DB_NAME: process.env.DB_NAME || 'GTP_TEST',
    JWT_SECRET: process.env.JWT_SECRET || '1a2b3c4d5e6f7g8h9i0jklmnopqrstuvwxYz1234567890ABCDEFabcdefghiJklmNOpQ',
    APP_MODE: process.env.APP_MODE || 'dev',
    PORT: process.env.PORT || 2000,
    corsOrigin: ['http://13.127.167.24', 'http://localhost:4200']
}

export default Object.freeze(config);
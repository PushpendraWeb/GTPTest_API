import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const config = {
    DB_HOST: process.env.DB_HOST,
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_NAME: process.env.DB_NAME || 'GTP_TEST',
    JWT_SECRET: process.env.JWT_SECRET,
    APP_MODE: process.env.APP_MODE || 'dev',
    PORT: process.env.PORT || 2000,
    corsOrigin: ['http://localhost:4200']
}

export default Object.freeze(config);
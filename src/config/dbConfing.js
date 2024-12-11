import Sequelize from 'sequelize';
import config from './config.js';

const db = {};

db.connection = new Sequelize(config.DB_NAME, config.DB_USER, config.DB_PASSWORD, {
    host: config.DB_HOST,
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 60000,
        idle: 10000
    },
    dialectOptions: {
        connectTimeout: 60000 // 60 seconds
    },
});

const sequelize = db.connection


db.Sequelize = Sequelize;

db.connect = (callback) => {
    db.connection.authenticate()
        .then(() => callback())
        .catch((err) => callback(err));
};

export { sequelize }
export default db;

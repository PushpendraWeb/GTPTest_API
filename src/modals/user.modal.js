import { DataTypes } from "sequelize";
import { sequelize } from "../config/dbConfing.js";

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    full_name: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(45),
        allowNull: false,
        unique: true // Ensure email uniqueness
    },
    mobile_no: {
        type: DataTypes.STRING(11),
        allowNull: false
    },
    password: {
        type: DataTypes.STRING(45),
        allowNull: true
    },
    address: {
        type: DataTypes.TEXT, // `longtext` is mapped to Sequelize's `TEXT`
        allowNull: false
    },
    zip_code: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    status: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
    },
    created_by: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    created_on: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    }
}, {
    tableName: 'user',
    timestamps: false,
    charset: 'utf8mb4',
    collate: 'utf8mb4_0900_ai_ci',
});

export default User;

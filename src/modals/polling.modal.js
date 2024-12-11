import { DataTypes } from "sequelize";
const PollingModal = sequelize.define('Polling', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    product_id: {
        type: DataTypes.STRING(45),
        allowNull: false,
    },
    username: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT('long'),
        allowNull: false,
    },
    created_on: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
}, {
    tableName: 'polling',
    timestamps: false, // Disables Sequelize's automatic createdAt and updatedAt columns
    charset: 'utf8mb4',
    collate: 'utf8mb4_0900_ai_ci',
});
export { PollingModal };

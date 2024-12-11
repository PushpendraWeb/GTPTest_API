import { DataTypes } from "sequelize";
import { sequelize } from "../config/dbConfing.js";
const ProductsModal = sequelize.define('Products', {
    product_no: {
        type: DataTypes.STRING(45),
        allowNull: false,
    },
    product_name: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    title: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    product_details: {
        type: DataTypes.TEXT('long'),
        allowNull: false,
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    MRP: {
        type: DataTypes.DECIMAL(11, 2),
        allowNull: false,
        defaultValue: 0.00,
    },
    sale_price: {
        type: DataTypes.DECIMAL(11, 2),
        allowNull: false,
        defaultValue: 0.00,
    },
    discount: {
        type: DataTypes.DECIMAL(11, 2),
        allowNull: false,
        defaultValue: 0.00,
    },
    main_image: {
        type: DataTypes.STRING(450),
        allowNull: true,
    },
    status: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 1,
    },
    created_by: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    created_on: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
    updated_by: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    updated_on: {
        type: DataTypes.DATE,
        allowNull: true,
    },
}, {
    tableName: 'Products',
    timestamps: false, // Disable Sequelize's automatic timestamps
    charset: 'utf8mb4',
    collate: 'utf8mb4_0900_ai_ci',
});

export { ProductsModal };

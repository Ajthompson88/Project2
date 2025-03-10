import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../config/database';

// Define the attributes for the Company model
interface CompanyAttributes {
    id: number;
    name: string;
    address: string;
    phone: string;
    email: string;
}

// Define the creation attributes for the Company model
interface CompanyCreationAttributes extends Optional<CompanyAttributes, 'id'> {}

// Define the Company model
class Company extends Model<CompanyAttributes, CompanyCreationAttributes> implements CompanyAttributes {
    public id!: number;
    public name!: string;
    public address!: string;
    public phone!: string;
    public email!: string;

    // Timestamps
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

// Initialize the Company model
Company.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true,
            },
        },
    },
    {
        sequelize,
        tableName: 'companies',
    }
);

export { Company };
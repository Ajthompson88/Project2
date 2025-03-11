import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../config/database';

// Define the attributes for the Interview model
interface InterviewAttributes {
    id: number;
    date: Date;
    time: string;
    location: string;
    companyId: number;
}

// Define the creation attributes for the Interview model
interface InterviewCreationAttributes extends Optional<InterviewAttributes, 'id'> {}

// Define the Interview model
class Interview extends Model<InterviewAttributes, InterviewCreationAttributes> implements InterviewAttributes {
    public id!: number;
    public date!: Date;
    public time!: string;
    public location!: string;
    public companyId!: number;

    // Timestamps
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

// Initialize the Interview model
Interview.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        time: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        companyId: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
    },
    {
        sequelize,
        tableName: 'interviews',
    }
);

export { Interview };
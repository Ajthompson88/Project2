import { DataTypes, Sequelize, Model, Optional } from 'sequelize';


interface ApplicationAttributes {
  id: number;
  name: string;
  status: string;
  description: string;
  company: string;
  position: string;
  saved: boolean;
  rejected: boolean;
  followup: boolean;
  interviews: boolean;
  assigneduserid?: number | undefined;
}

interface ApplicationCreationAttributes extends Optional<ApplicationAttributes, 'id'> {}

export class Application extends Model<ApplicationAttributes, ApplicationCreationAttributes> implements ApplicationAttributes {
  public id!: number;
  public name!: string;
  public status!: string;
  public description!: string;
  public company!: string;
  public position!: string;
  public saved!: boolean;
  public rejected!: boolean;
  public followup!: boolean;
  public interviews!: boolean;
  public assigneduserid?: number | undefined;

  
  public readonly user?: Application;
}

export function ApplicationData(sequelize: Sequelize): typeof Application {
  Application.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      company: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      position: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      saved: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      rejected: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      followup: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      interviews: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      assigneduserid: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'user',
          key: 'id'
        }
      }
    },
    {
      tableName: 'application',
      sequelize,
    }
  );

  return Application;
}

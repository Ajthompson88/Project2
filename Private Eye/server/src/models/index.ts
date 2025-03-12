
import { UserData, User } from './User.js';
import { ApplicationData, Application } from './Application.js';
import sequelize from '../config/connection.js';

    const InitUserData =  UserData(sequelize);
    const InitApplicationData =  ApplicationData(sequelize);

    InitUserData.hasMany(Application, { foreignKey: 'assigneduserid'});
    InitApplicationData.belongsTo(User, { foreignKey: 'assigneduserid', as: 'assigneduser'});

export { User, Application };

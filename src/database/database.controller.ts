import "reflect-metadata"
import { Sequelize } from "sequelize";
import { Controller } from '@nestjs/common';

@Controller('database')
export class DatabaseController {
    public static getTypeOrmConfig() {
        const AppDataSource = new Sequelize('jobportal', 'root', 'root', {
            host: 'localhost',
            dialect: 'mysql',
            define:{
                freezeTableName:true,
            }
         });
        return AppDataSource;
    }
}

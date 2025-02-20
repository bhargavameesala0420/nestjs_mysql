import { DatabaseController } from "src/database/database.controller";
import { DataTypes } from "sequelize";
import { defaultIfEmpty } from "rxjs";
const User = DatabaseController.getTypeOrmConfig().define("user",{
    userid:{
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement: true,
    },
    firstname:{
        type:DataTypes.STRING,
    },
    lastname:{
        type:DataTypes.STRING,
    },
    email:{
        type:DataTypes.STRING,
    },
    password:{
        type:DataTypes.STRING,
    },
    usertype:{
        type:DataTypes.INTEGER,
    }
}, {
    timestamps: false
})
export default User;

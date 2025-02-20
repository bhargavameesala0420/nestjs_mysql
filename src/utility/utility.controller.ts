import { Controller } from '@nestjs/common';
import { messages,returnobject,statuscodes } from './constants';

@Controller('utility')
export class UtilityController {
    public static async create(model:any,data:any){
        let modelName = model.name;
        try {
            const savedData = await model.create(data);
            let returnObject = this.returnObject([savedData],statuscodes.success,modelName,'create');
            return returnObject;
        } catch (error) {
            let returnObject = this.returnObject([error],statuscodes.error,modelName,'createerr');
            return returnObject;
        }
    }

    public static async findOne(model:any,data:any){
        let modelName = model.name;
        try {
            const userData = await model.findOne({where:data});
            if(userData == null){
                let returnObject = this.returnObject([userData],statuscodes.error,modelName,'findoneeerr');
                return returnObject; 
            }
            let returnObject = this.returnObject([userData],statuscodes.success,modelName,'findone');
            return returnObject;
        } catch (error) {
            let returnObject = this.returnObject([error],statuscodes.error,modelName,'findoneeerr');
            return returnObject;
        }
    }

    public static returnObject(data:Array<any>,status:number,model:string,type:string):any{
        const message = messages[type];
        const returnobj:returnobject={
            data:data,
            status:status,
            message: `${model}${message}`,
        }
        return returnobj;
    }
}

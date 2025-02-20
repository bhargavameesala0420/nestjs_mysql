export type returnobject={
    status:number,
    message:string,
    data:Array<any>,
}

export enum messages{
    create = ' created successfully',
    createerr = ' creation error',
    findone = ' found successfully',
    findoneeerr = ' not found',
    invaliduser = 'invalid credentials',
}

export enum statuscodes{
    success = 200,
    created = 201,
    error = 400
}
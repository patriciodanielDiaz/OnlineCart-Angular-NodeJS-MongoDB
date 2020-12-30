const UserType = require('../models/UserType') 

async function createRoles(){

    try{
        const count =await UserType.estimatedDocumentCount();
        //console.log(count);
        if(count > 0) return;

        const values = await Promise.all([
            new UserType({userType:'administrador'}).save(),
            new UserType({userType:'cliente'}).save(),
        ]);
        //console.log(values);
    
    }catch(error){
    
        console.log(error);
    
    }
    
};

module.exports = {createRoles};
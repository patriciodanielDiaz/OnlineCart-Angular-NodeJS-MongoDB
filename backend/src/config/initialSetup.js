const UserType = require('../models/UserType') 

async function createRoles(){

    try{
        const count =await UserType.estimatedDocumentCount();
        //console.log(count);
        if(count > 0) return;

        const values = await Promise.all([
            new UserType({userType:'administrator'}).save(),
            new UserType({userType:'client'}).save(),
        ]);
        //console.log(values);
    
    }catch(error){
    
        console.log(error);
    
    }
    
};

module.exports = {createRoles};
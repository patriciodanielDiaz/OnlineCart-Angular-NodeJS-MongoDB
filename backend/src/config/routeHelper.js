
function routeHelper(callback){
    return async (req, res) => {
        try{
            await callback(req,res);
        } catch (error){
            res.status(403).json({
                status: 'error',
                message: error.message,
            });
        }
    };
}

//tiro un error
function adddb(){
    return new Promise((resolve,reject)=>{ reject(new Error("hubo un error"))}); 
}

module.exports = {
    routeHelper,
    adddb,
}
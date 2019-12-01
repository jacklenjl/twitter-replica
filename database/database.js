const typeOrm = require('typeorm')
module.exports = 
typeOrm.createConnection()
.catch(err => 
    console.log("the error is:",err)).
    then(connection=>{return connection});
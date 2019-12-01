const typeorm = require("typeorm");
const EntitySchema = typeorm.EntitySchema;
const User = require("../model/user")
module.exports =new EntitySchema ({
    name: "user",
    target: User,
    columns: {
        id: {
            primary: true,
            type: "int",
            
            
        },
        name: {
            type: "varchar"
        }
    }
})


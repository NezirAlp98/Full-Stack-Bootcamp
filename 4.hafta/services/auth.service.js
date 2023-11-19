const users=require("../mock.js")

exports.getUserByEmailAndPassword=(email,password)=>{
    return users.find((u)=>u.email===email && u.password===password )
};
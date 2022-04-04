const jwt = require("jsonwebtoken");
const config = require("./config");

const verify_token = (req,res,next) => {

    const token = req.body.token  || req.headers["x-access-token"];

    if(!token){
        res.status(403).send();
    }

    try{
        const decoded = jwt.verify(token,config.token_key);
        req.token = decoded;

    }catch(err){
        res.status(401).send();

    }
    next();
}

module.exports = verify_token;
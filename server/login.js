const Router = require("express").Router;
const jwt = require("jsonwebtoken");
const config = require("./config");

const login = new Router;

login.post("/", async (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;

    if (!(username && password)){
        res.status(400).send();
    }
    try{
        const db = req.app.locals.db;
        let user = await db.collection("users").findOne({username: username});

        if(user && user.password === password){
            const token = jwt.sign({user_id: user._id,name: user.name},config.token_key,{
                expiresIn: "2h"
            }
            );
            res.status(200).send({name: user.name, token:token});

        }
        res.status(400).send();
    
    }catch(err){
        next(err);
    }
});

module.exports = login;
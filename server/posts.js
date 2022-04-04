const validate = require("./validate");
const verify_token = require("./verify_token");

const Router = require("express").Router;
const ObjectId = require("mongodb").ObjectId;

const posts = new Router();

posts.get("/", async (req, res, next) => {
    try{
        const db = req.app.locals.db;
        let posts = await db.collection("posts").find().project({content: 0}).toArray();
        console.log("Posts sent");
        res.send(posts);
     
    }catch(err){
        next(err);
    }
});

posts.get("/:id", async (req, res, next) => {
    try{
        const db = req.app.locals.db;
        const id = new ObjectId(req.params.id);
        const post = await db.collection("posts").findOne({_id: id},{projection: {description: 0}});
        res.send(post);

    }catch(err){
        next(err);
    }
});



//Protected routes

posts.delete("/:id", verify_token, async (req, res, next) => {
    try{
        const db = req.app.locals.db;
        const id = new ObjectId(req.params.id);
        await db.collection("posts").deleteOne({_id: id});
        res.send();
    }catch(err){
        next(err);
    }
});

posts.post("/", verify_token, async (req, res, next) => {

    const new_post = {   
        author: req.body.author,
        date: req.body.date,
        title: req.body.title,
        description: req.body.description,
        content: req.body.content    
    };

    try{
        if(!validate.validate(new_post,validate.post_schema)){
            throw new Error("Invalid request");
        }
        const db = req.app.locals.db;
        await db.collection("posts").insertOne(new_post);
        res.status("201").send();
    }catch(err){
        next(err);
    }

});


module.exports = posts;
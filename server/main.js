const express = require("express");
const MongoClient = require("mongodb").MongoClient;

const config = require("./config");
const posts = require("./posts");
const login = require("./login");

const app = express();

app.use(express.json());
app.use("/api/posts",posts);

app.use("/api/login",login);


/*
Serve angular app in build
app.get( "/", ( req, res ) => {
    res.send( "" );
} );

*/
app.get("/api/featured",async (req, res, next) => {
    try{
        const db = req.app.locals.db;
        
        const post = await db.collection("posts").find().project({content: 0}).limit(5).sort({date:1}).toArray();
        res.send(post);

    }catch(err){
        next(err);
    }

});

MongoClient.connect(config.mongo_uri).then(client => {
    app.locals.db = client.db();
    app.listen(config.port, () => console.log(`Listening on port ${config.port}`));
}).catch(err => {
    console.error("Cannot connect to database");
})



const MongoClient = require("mongodb").MongoClient;

const uri = "mongodb+srv://dbUser:dbUserPass@cluster0.fzxrn.mongodb.net/blog?retryWrites=true&w=majority"

async function main(){
    try{
     var client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });  

     
    }catch(e){
        console.error(e);
    }

    try {

        
        const db = client.db();
        const collection = db.collection("posts");

   
        await collection.updateMany({},{$unset: {id:1}});


        

      

        let query = {  }

        let res = await collection.findOne({ });

        console.log(res);

    } catch (err) {

        console.log(err);
    } finally {

        client.close();
    }



}
main();
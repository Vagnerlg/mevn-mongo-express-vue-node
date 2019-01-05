var app = require('express')();
var cors = require('cors')
var MongoClient = require('mongodb').MongoClient;

function connect(callback){
    MongoClient.connect('mongodb://127.0.0.1:27017/medical?useNewUrlParser=true', (err, db) => {
        if(!err) {
            console.log("We are connected");
            }
        DB = db.db('medical');
        callback(DB);
        
    });
}



app.get('/',function(req,res){
    connect(DB=>{
        const cursor = DB.collection('company').find().toArray((e,r)=>{
            res.json(r);
        });
    });
})

app.use(cors);

app.listen(3000, function(){
    console.log("servidor instaciado");
})

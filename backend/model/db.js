var MongoClient = require('mongodb').MongoClient;

exports.connect = function(callback){
    MongoClient.connect('mongodb://127.0.0.1:27017/medical?useNewUrlParser=true', (err, db) => {
        if(!err) {
            console.log("We are connected");
            }
        DB = db.db('medical');
        callback(DB);
        
    });
}
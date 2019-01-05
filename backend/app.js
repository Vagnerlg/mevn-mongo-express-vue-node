var app = require('express')();
var cors = require('cors')
var DB = require('./model/db');
var ObjectID = require('mongodb').ObjectID;


app.get('/',function(req,res){
    res.json({resp:'Rota não encontrada'});
})

app.get('/:collection/:id?/:field?',function(req,res){
    console.log(req.params);
    var find = {};
    var field = req.param.field;
    var id = req.param.id;
    if(field){
        find = {
            $regex : {
                id : field
            }
        }
    } else if(id){
        find = { _id : ObjectID(id) }
    }

    DB.connect(DB=>{
        const cursor = DB.collection(req.params.collection).find(find).toArray((e,r)=>{
            res.json(r);//$regex
        });
    });
})

app.use(cors);

app.listen(3000, function(){
    console.log("servidor instaciado");
})

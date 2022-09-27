const express = require('express');
const Datastore = require("nedb");
const app =  express();

app.listen(3000,() => console.log("I'm listing you"));

app.use(express.static("public"));

app.use(express.json({ limit: "1mb"}));

const database = new Datastore("database.db");
database.loadDatabase();


app.get("/sky",(req,res) => {
    database.find({},(err,data) =>{
        if(err){
            res.end();
            return;
        }
        res.json(data);
    })
});

app.post("/sky",(req,res) => {
    console.log("Server is online!");
    const data = req.body;

    database.insert(data);
    res.json({data});
    console.log(data);

});
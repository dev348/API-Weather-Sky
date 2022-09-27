// import fetch from 'node-fetch';

const express = require('express');
const Datastore = require("nedb");
const fetch = require("node-fetch");

const app =  express();

app.listen(3000,() => console.log("I'm listing you"));

app.use(express.static("public"));

app.use(express.json({ limit: "1mb"}));

const database = new Datastore("database.db");
database.loadDatabase();

const apikey = "2f793e9dbbece38bc1d28937156e3b09"


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

app.get("/weather/:latlon",async (req,res) => {

    const latlon = req.params.latlon.split(',');
    console.log(latlon);
    const lat = latlon[0];
    const lon = latlon[1];
    console.log(lat,lon);

    const api_url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=428b3de5263991efb4105d6d65301cab`
const fetch_res = await fetch( api_url);
const json = await fetch_res.json();
res.json(json);

});
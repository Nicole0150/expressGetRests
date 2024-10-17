const express = require("express");
const app = express();
const Restaurant = require("../models/index")
const db = require("../db/connection");

//TODO: Create your GET Request Route Below: 

app.get("/restaurants", async (req, res) =>{
    const restaurants = await Restaurant.findAll({});
    res.json(restaurants);
})

app.get("/restaurants/:id", async (req, res) =>{
    const parameter = req.params.id;
    const restaurant = await Restaurant.findByPk(parameter);
    res.json(restaurant);
})

app.use(express.json());
app.use(express.urlencoded());

app.post("/restaurants", async(req, res) =>{
    const restaurant = await Restaurant.create(req.body);
    res.json(restaurant);
})

app.put("/restaurants/:id", async (req, res) =>{
    const route = req.params.id;
    const replace = await Restaurant.update(req.body, {where: {id: route}})
    res.json(replace);
})

app.delete("/restaurants/:id", async(req, res) =>{
    const route = req.params.id;
    const del = await Restaurant.destroy({where: {id: route}});
    res.json(del);
})


module.exports = app;
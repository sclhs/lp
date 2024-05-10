import express from "express";
// to import express
// set type: 'module' in package.json to use import method
// else use this command -> const express = require("express");

const app = express();

app.use(express.static('public'));

app.listen(3000, ()=> {
    console.log("Server is started!");
});
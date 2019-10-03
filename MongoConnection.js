const express =require('express');
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Satyajit:1234@cluster0-xulor.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri,{ useUnifiedTopology: true }, { useNewUrlParser: true });
const app = express();
const port = 8100;
const cors=require('cors');

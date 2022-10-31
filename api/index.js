const express = require("express");
const connectToMongo = require("./db");
const cors  = require("cors");

connectToMongo();

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
app.use('/api/industries',require('./routes/industry'));


app.listen(port,() =>{
    console.log(`server connected to the port no. ${port}`);
})
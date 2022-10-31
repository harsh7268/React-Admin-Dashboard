const mongoose = require("mongoose");

const connectToMongo = async () =>{
    try{
    const url = 'mongodb+srv://harsh:harsh@cluster0.oha3ryl.mongodb.net/netclan?retryWrites=true&w=majority';
    const result = await mongoose.connect(url);
    console.log('database connected successfully ...');
    }catch(err){
        console.log(err);
    }

}

module.exports = connectToMongo;
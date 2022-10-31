const express = require("express");
const router = express.Router();
const Industry = require("../model/industry");


router.get("/get", async (req,res) =>{
    try{
    const user = await Industry.find();
    res.json(user);
    }catch(err){
        return res.status(400).json({ errors: err.message });
    }
});

router.post('/create', async (req,res) =>{
   

    try{
    const note = await Industry.insertMany(req.body);

      res.json(note);
    }catch(err){
        return res.status(400).json({ errors: err.message });
    }

});

module.exports = router;
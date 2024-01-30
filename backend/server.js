const express = require("express");
const app = express();
app.use(express.json());

const cors = require('cors');
app.use(cors())
require('./db/connection');
const Users = require('./Models/Users');

app.post("/", async(req,res) => {
    let user = new Users(req.body);
    let result = await user.save();
    console.log(result);
    res.send(result);
})

console.log('connected')
app.listen(4000)
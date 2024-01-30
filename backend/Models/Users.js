const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    feed: String,
    customurl: String,
});

module.exports = mongoose.model("users", userSchema)
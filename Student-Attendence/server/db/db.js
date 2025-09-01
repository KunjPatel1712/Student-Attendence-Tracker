const mongoose = require("mongoose")
require("dotenv").config()

async function database() {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("Connected to Database >>>>>>>")
    } catch (error) {
        console.log(error)
    }
}

 module.exports = database 
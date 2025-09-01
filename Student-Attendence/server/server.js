const express = require("express");
const database = require("./db/db");
const router= require("./routes/student.route")
const cors = require("cors");
const STUDROUET = require("./routes/student.route");
const app = express()

app.use(express.json())

app.use(cors())

app.use("/api/stu/",STUDROUET);
require("dotenv").config()



app.listen( process.env.PORT , async()=>{
    try {
        await database();
        console.log("Server is running >>>>>>>>>>>>>>>>>>>")
    } catch (error) {
        console.log("Server Error ")
    }
})

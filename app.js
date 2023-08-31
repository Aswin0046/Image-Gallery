require("dotenv").config();
const express = require("express");
const app = express();
require("./db/conn");
const cors = require("cors");
const router = require("./routes/router")



app.use(express.json());
app.use(cors());

app.use("/uploads",express.static("./uploads"))
app.use(router)

app.listen(3012,()=>{
    console.log("server start")
})
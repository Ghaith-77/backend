let express = require("express")
let app = express()
let connectToDB = require("./config/connectToDB")
connectToDB()

require("dotenv").config()

app.use(express.json())




port = process.env.port || 3000
app.listen(port,()=>{
    console.log("iam listen");
})





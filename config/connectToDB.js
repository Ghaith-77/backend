let mongoose = require("mongoose")

module.exports = async()=>{
    try {
        await mongoose.connect(process.env.DB)
        console.log("DB Connect");
    } catch (error) {
      console.log(error);  
    }
}
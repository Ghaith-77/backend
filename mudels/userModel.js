let mongoose = require("mongoose")

let userschema = mongoose.createConnection({
    username:{
        type:String,
        require : true,
        minlenght:3,
        maxlenght:20
    },
    email:{
        type:String,
        require : true,
        minlenght:3,
        maxlenght:20,
        unique : true
    },
    password:{
        type:String,
        require : true,
        minlenght:3,
        maxlenght:20
    },
    isAdmin:{
        type:Boolean,
        default:false,
        
    },
    isAcountVirfid:{
        type:Boolean,
        default:false,
        
    },
    profilPhoto:{
       tpye:Object,
       default:{
        url:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png",
        publicId:null
       }
    },
    bio: String,

},{timestamps:true})
let usermodel = mongoose.model("user",userschema)

module.exports = {
    usermodel,
}
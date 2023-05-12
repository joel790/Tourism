
const bcrypt=require("bcryptjs");

const mongoose=require("mongoose");
userSchema=mongoose.Schema({

    name:{
        type:String,
        required:[true,"please add the name"],

    },
    isAdmin:{
        type:Boolean,
        default:false,

    },
    email:{
        type:String,
        required:[true,"please add the email"],
        unique:true,
        trim:true,
        match:[
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "please add a valid email"

        ]
    },
    password:{
        type:String,
        required:[true,"please enter the password"],
        minLength:[8,"please add at least 8 characters!"],
        // maxLength:[23, "password is not more than 23 characters"],

    },
    photo:{
        type:String,
        required:[true,"please add the photo"],
        default:"https://as2.ftcdn.net/v2/jpg/02/29/75/83/1000_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg",

    },
    phone:{
        type:Number,
        default:+251,

    },
    

},
{
    timestamp:true,
}
)
userSchema.methods.matchPassword = async function (password) {
    const isMatch = await bcrypt.compare(password, this.password);
    return isMatch;
  };

const User=mongoose.model("User",userSchema)

module.exports=User
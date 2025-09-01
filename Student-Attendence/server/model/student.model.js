const mongoose= require("mongoose")

const studentSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    Attendence:{
        type:Boolean,
        default:true
    },
    RollNo:{
        type:Number,
        required:true
    },
    createdate:{
        type:String,
        default:()=>{
            const date= new Date()
            return `${date.getDate()}- ${date.getMonth()+ 1}- ${date.getYear()}`
        }
    }
    
},{
    timestamps:true
})

const STUTRACKER= mongoose.model("attendence",studentSchema)

module.exports= STUTRACKER
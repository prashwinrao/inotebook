const mongoose=require('mongoose')
const { Schema } = mongoose;


const noteSchema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    title:{
        type:String,
        required:true
      },
    description:{
        type:String,
        required:true
    },
    tag:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
  
  });
   const Note=mongoose.model('Note',noteSchema);
  module.exports= Note
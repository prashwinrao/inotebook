const mongoose=require('mongoose');
const MongoURI='mongodb://localhost:27017/inotebook'


const connectToMongo=()=>{
    mongoose.connect(MongoURI,()=>{
        console.log("connected to mongo successfully");
    })
}

module.exports=connectToMongo;
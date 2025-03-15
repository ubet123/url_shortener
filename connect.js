const mongoose=require('mongoose')

async function ConnectToMongo(url){
    return mongoose.connect(url)
}

module.exports={
    ConnectToMongo
}
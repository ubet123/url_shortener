const express = require('express');
const app = express();
const port = 5005;

const urlRoute = require('./routes/url');
const { ConnectToMongo } = require('./connect');
const URL = require('./models/urls');


// Connect to MongoDB
ConnectToMongo('mongodb://127.0.0.1:27017/shorturldb')
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error('MongoDB connection error:', err));

// Use middleware 
app.use(express.json()); 

app.get('/test',async(req,res)=>{

    const allurls= await URL.find({})
})

app.get('/', (req, res) => {
    res.send('Server is working!');
});


app.use('/url', urlRoute);

app.get('/:shorturl', async (req,res)=>{
    const shortId=req.params.shorturl
    const entry = await URL.findOneAndUpdate({
        shortId
    },{
        $push:{
            visitHistory:{
                timestamp:Date.now()
            }
        }
    })

    res.redirect(entry.redirectURL)

})

app.listen(port, () => console.log(`Server mounted on ${port}`));

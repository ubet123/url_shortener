const shorid=require('shortid')
const url=require('../models/urls')
const shortid = require('shortid')

async function handleGenerateNewShortUrl(req,res){

    const body=req.body
    if(!body.url)return res.status(400).json({error:'url is required'})
const shortID=shortid(8)
await url.create({
    shortId:shortID,
    redirectURL:body.url,
    visitHistory:[]
    
})

return res.json({shortURL:shortID})
}

module.exports={
    handleGenerateNewShortUrl
}
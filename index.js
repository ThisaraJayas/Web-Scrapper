import express from 'express';
import puppeteer from 'puppeteer';

const app = express();

app.get('/hello', async(req,res)=>{
    res.send({hello:"hello word"});
})

app.listen(3000, ()=>{
    console.log("Server Running at port 3000");
})

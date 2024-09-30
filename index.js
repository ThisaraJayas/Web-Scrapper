import express from 'express';
import puppeteer from 'puppeteer';
import ScraperRoute from './routes/scraperRoute.js'

const app = express();


app.use('/search',ScraperRoute )


app.listen(3000, () => {
    console.log('Server Running at port 3000');
});

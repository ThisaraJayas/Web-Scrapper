import express from 'express';
import ScraperRoute from './routes/ScraperRoute.js'

const app = express();
app.use(express.json())

app.use('/search',ScraperRoute )


app.listen(3000, () => {
    console.log('Server running at port 3000');
});

import { scraping } from "../utils/puppeterUtil.js";


export const scrapListing = async (req, res) => {
    const keyword = req.query.keyword; 
    try {
        const listings = await scraping(keyword); 
        res.json(listings); 
    } catch (error) {
        console.log(error);
        
    }
};
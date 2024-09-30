import puppeteer from 'puppeteer';

export const scraping = async(keyword)=>{
    try {
        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();

        const searchURL = `https://ikman.lk/en/ads?query=${keyword}`;
        await page.goto(searchURL, { waitUntil: 'networkidle2', timeout: 120000 });

        const listings = await page.$$eval('li.gtm-normal-ad a.card-link--3ssYv.gtm-ad-item', links => {
            return links.map(link => ({
                title: link.getAttribute('title'), 
                url: link.href, 
                price: link.querySelector('.price--3SnqI span'),

            }));
        });

        await browser.close(); 

        return listings; 
    } catch (error) {
        console.log("pupeter util error: ",error);
        
    }
}
import puppeteer from "puppeteer";

export const scraping = async (keyword) => {
  try {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    let currentPage = 1;
    const searchURL = `https://ikman.lk/en/ads?query=${keyword}&page=${currentPage}`;
    await page.goto(searchURL, { waitUntil: "networkidle2", timeout: 400000 });

    const detailedListing = [];

    const scrapeCurrentPage = async () => {
      const cardListings = await page.$$eval("li.gtm-normal-ad a.card-link--3ssYv.gtm-ad-item",(links) => {
          return links.map((link) => ({
            title: link.querySelector("h2").innerText,
            price: link.querySelector(".price--3SnqI span").innerText,
            url: link.href,
          }));
        }
      );

      for (const listing of cardListings) {
        const itemPage = await browser.newPage();
        await itemPage.goto(listing.url, {
          waitUntil: "networkidle2",
          timeout: 400000,
        });

        const postedDate = await itemPage.$eval(".sub-title--37mkY",(element) => {
            const text = element.innerText;
            const dateMatch = text.match(/Posted on (.+?),/);
            return dateMatch[0];
          }
        );

        const location = await itemPage.$eval(".subtitle-wrapper--1M5Mv",(element) => {
            const city = element.querySelector(".subtitle-location-link--1q5zA span").innerText;
            return city;
          }
        );

        detailedListing.push({
          ...listing,
          postedDate,
          location,
        });

        await itemPage.close();
      }
    };

    while (true) {
      await scrapeCurrentPage();

      const nextPageTag = `li.gtm-go-to-page[data-id="${currentPage + 1}"]`;
      const nextPageExists = await page.$(nextPageTag);
      if (!nextPageExists) {
        break;
      }

      currentPage++;
    }

    await browser.close();
    return detailedListing;

  } catch (error) {
    console.log("pupeter util error", error);
  }
};

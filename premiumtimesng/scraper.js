const cheerio = require("cheerio");
const { createBrowser } = require("../utils/browser");

async function scrapePremiumTimesNews(page) {
  const url = `https://www.premiumtimesng.com/category/news/headlines/page/3`;
  const response = {};
  try {
    const browser = await createBrowser();
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: "networkidle2", timeout: 0 });
    await page.waitForSelector(
      ".jeg_block_container > .jeg_posts article .jeg_thumb .thumbnail-container img",
    );
    const pageData = await page.evaluate(() => {
        return {
            html: document.documentElement.innerHTML,
        }
    });
    const $ = cheerio.load(pageData.html)
    const text = $(".jeg_block_container > .jeg_posts article:nth-child(1)").text()
    console.log(text)
  } catch (error) {
      console.log("Error", error.message)
  }
}

scrapePremiumTimesNews(1)

const puppeteer = require('puppeteer')

const createBrowser = async () => {
    let browser;
    try {
        browser = await puppeteer.launch({
            headless: true,
            ignoreHTTPSErrors: true,
            args: ['--disable-setuid-sandbox']
        })
    } catch (error) {
        console.log("Could not launch browser =>", error)
    }
    return browser;
}

module.exports = {
    createBrowser
}
const { chromium } = require('playwright');

async function launchBrowser() {
    let browser;

    try {
        browser = await chromium.launch({
            headless: false
        });

        const page = await browser.newPage();

        await page.goto('http://14.143.250.66:8786/starsgdk/workbench/index.html');

        console.log("Browser launched and navigated to the specified URL.");

        await closeBrowser(browser);

    } catch (error) {
        console.error("Error launching browser:", error);
    }
}

async function closeBrowser(browser) {
    try {
        await browser.close();
        console.log("Browser closed successfully.");
    } catch (error) {
        console.error("Error closing browser:", error);
    }
}

launchBrowser();
// const { chromium } = require('playwright');

// (async () => {
//     const browser = await chromium.launch({
//         headless: false,
//         channel: 'chrome'
//     });
//     const context = await browser.newContext();
//     const page = await context.newPage();
//     await page.goto('https://example.com/');
//     await page.locator('html').click();
//
//     // ---------------------
//     await context.close();
//     await browser.close();
// })();


import {chromium} from "playwright";

const browser = await chromium.launch({
    headless: false,
    channel: 'chrome'
});
const context = await browser.newContext();
const page = await context.newPage();
await page.goto('https://example.com/');
await page.locator('html').click();
await page.waitForTimeout(10000);

// ---------------------
await context.close();
await browser.close();
import {Given, When, Then} from "@cucumber/cucumber";
import {CustomWorld} from "../support/hooks";
import {DestinationPage} from "../pages/destination";
import type {Page} from "playwright";
import {HomePage} from "../pages/home";
import logger from "../utilities/logger-module";


let homePage: HomePage;
let destinationPage: DestinationPage;

When('select the destination card labeled as {string}', async function (this: CustomWorld, destinationName: string) {
    homePage = new HomePage(this.page);
    await homePage.selectDestinationCard(destinationName);
})

Then('read metrics', async function () {
    destinationPage = new DestinationPage(this.page);
    await destinationPage.changeMenu(destinationPage.menuOptions.EVENTS);
    let metricCount = await destinationPage.getMetricCount();
    let count = `Delivered events count = ${metricCount.delivered}\nFailed events count = ${metricCount.failed}\nFailure rate = ${metricCount.failureRate}`
    logger.info(count);
    console.log(count);
})
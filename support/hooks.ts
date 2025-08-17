import {Before, After, setWorldConstructor, World, IWorldOptions, setDefaultTimeout} from "@cucumber/cucumber";
import {PlaywrightModule} from "../utilities/playwright-module";
import {ENV_DATA} from "./env";
import {Page} from "playwright";
import logger from "../utilities/logger-module";
import fs from "fs";
import path from "path";

const pwModule = new PlaywrightModule();

setDefaultTimeout(60 * 1000);

export class CustomWorld extends World {
    page!: Page;
    dataPlane!: string;
    writeKey!: string;

    constructor(options: IWorldOptions) {
        super(options);
    }
}

setWorldConstructor(CustomWorld);

Before(async function (this: CustomWorld) {
    await pwModule.start();
    this.page = pwModule.page;
    logger.info("Browser launched");
});

After(async function (scenario) {
    if (scenario.result?.status === 'FAILED') {
        const screenshotPath = await pwModule.takeScreenshot(scenario.pickle.name.replace(/\s+/g, '_'));
        this.attach(fs.readFileSync(screenshotPath), 'image/png');
    }
    await pwModule.stop();
    logger.info("Browser stopped");
});


import {chromium, Browser, Page} from "playwright";
import {CONFIG} from "../config";
import fs from "fs";
import path from "path";

export class PlaywrightModule {
    browser!: Browser;
    page!: Page;

    async start() {
        this.browser = await chromium.launch({
            headless: true,
            args: ['--start-maximized']
        });
        const context = await this.browser.newContext();
        this.page = await context.newPage();
    }

    async stop() {
        await this.browser.close();
    }

    async takeScreenshot(filename: string) {
        const dir = CONFIG.paths.screenshots;
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, {recursive: true});
        }
        const filePath = path.join(dir, `${filename}.png`);
        await this.page.screenshot({path: filePath});
        return filePath;
    }
}

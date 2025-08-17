import {Page} from 'playwright';
import logger from "../utilities/logger-module";

export class HomePage {
    private page: Page;

    private selector = {
        email: '[data-testid="Email"]',
        password: '[data-testid="Password"]',
        loginButton: '//span[text()="Log in"]/parent::button',
        skipMFA: 'a[href="/addmfalater"]',
        goToDashboard: '//span[text()="Go to dashboard"]/parent::button',
        dismissToast: 'role=button[name="Close"]',
        destinationCard: (name: string): string => `text=${name}`,

        dataPlaneSpan: '//button[contains(@class, "dataplane-url-copy-cta")]/preceding-sibling::span',

        collectMenuOptionDiv: '//div[text()="Collect"]',
        destinationSubMenuOptionDiv: '[data-testid="sub-menu-connections"]',

        connectionPageHeader: '//h3[text()="Connections"]',
        writeKeySpan: (name: string): string => `//span[text()="${name}"]//ancestor::div[starts-with(@id, "source-")]//span[contains(text(), "Write key")]`,
    };

    public constructor(page: Page) {
        this.page = page;
    }

    async login(url: string, username: string, password: string) {
        await this.page.goto(url, {waitUntil: 'load'});
        await this.page.getByTestId('Email').fill(username);
        await this.page.getByTestId('Password').fill(password);
        await this.page.click(this.selector.loginButton);
        await this.page.click(this.selector.skipMFA);
        await this.page.click(this.selector.goToDashboard);
        await this.page.click(this.selector.dismissToast);
        logger.info('Logged in successfully');
    }

    async getDataPlane(): Promise<string> {
        let dataPlane = await this.page.textContent(this.selector.dataPlaneSpan) ?? '';
        if (!dataPlane) {
            let errorMessage = 'Unable to find data plane';
            logger.error(errorMessage);
            throw new Error(errorMessage);
        }
        return dataPlane;
    }

    async visitConnectionsPage(): Promise<void> {
        if (!await this.page.isVisible(this.selector.connectionPageHeader)) {
            await this.page.locator(this.selector.destinationSubMenuOptionDiv).click();
        }
    }

    async getWriteKey(sourceName: string): Promise<string> {
        const keyText = await this.page.textContent(this.selector.writeKeySpan(sourceName));
        const key = keyText?.replace('Write key ', '').trim();
        return key ?? '';
    }

    async selectDestinationCard(destinationName: string) {
        await this.page.click(this.selector.destinationCard(destinationName))
        logger.info(`Selected ${destinationName} destination`)
    }
}
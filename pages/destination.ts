import {Page} from "playwright";

export class DestinationPage {
    public constructor(private page: Page) {
    };

    public menuOptions = {
        SOURCES: 'Sources',
        TRANSFORMATION: 'Transformation',
        EVENTS: 'Events',
        CONFIGURATION: 'Configuration',
        SETTINGS: 'Settings',
    }

    private selector = {
        menuBarDiv: 'div[class="ant-tabs-nav"]',
        menuDiv: (title: string): string => `[data-node-key="${title}"]`,
        metricCountHeader: (type: string): string => `//span[text()="${type}"]/following-sibling::div//h2`,
    }

    async isDestinationPageLoaded(): Promise<boolean> {
        return await this.page.isVisible(this.selector.menuBarDiv);
    }

    async changeMenu(to: string): Promise<void> {
        await this.page.click(this.selector.menuDiv(to));
    }

    async getMetricCount(): Promise<{ [key: string]: string | null }> {
        let delivered = await this.page.textContent(this.selector.metricCountHeader('Delivered'))
        let failed = await this.page.textContent(this.selector.metricCountHeader('Failed'))
        let failureRate = await this.page.textContent(this.selector.metricCountHeader('Failure rate'))
        let count: { delivered: string | null, failed: string | null, failureRate: string | null } = {
            'delivered': delivered,
            'failed': failed,
            'failureRate': failureRate,
        }
        return count
    }

}
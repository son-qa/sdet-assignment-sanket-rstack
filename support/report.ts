const reporter = require("multiple-cucumber-html-reporter");

reporter.generate({
    jsonDir: "./reports",
    reportPath: "./reports/html",
    displayDuration: true,
    pageTitle: "Test Automation Report",
    metadata: {
        browser: { name: "chromium", version: "latest" },
        device: "Local Machine",
        platform: { name: process.platform, version: process.version }
    },
});
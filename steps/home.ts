import {Given, When, Then} from "@cucumber/cucumber";
import {HomePage} from "../pages/home";
import {ENV_DATA} from "../support/env";
import {CustomWorld} from "../support/hooks";
import * as assert from "node:assert";

let home: HomePage;

Given('user has logged in', async function () {
    home = new HomePage(this.page);
    await home.login(ENV_DATA.baseUrl, ENV_DATA.userEmail, ENV_DATA.password);
})

Given('visits connections page', async function () {
    await home.visitConnectionsPage();
})

Given('fetches the data plane url', async function (this: CustomWorld) {
    this.dataPlane = await home.getDataPlane();
})

Given('fetches the write key for the source labeled as {string}', async function (this: CustomWorld, sourceName: string) {
    this.writeKey = await home.getWriteKey(sourceName);
})


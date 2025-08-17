import {Given, When, Then} from "@cucumber/cucumber";
import {SendEvent} from "../utilities/api-module";
import {CustomWorld} from "../support/hooks";
import {CONSTANTS} from "../constants";
import logger from "../utilities/logger-module";

let api: SendEvent;

When('user fires a {string} event to {string} using {string}', async function (this: CustomWorld, event: string, dataPlane: string, writeKey: string) {
    let actualDataPlane = dataPlane === CONSTANTS.STORED_VALUE ? this.dataPlane : dataPlane;
    let actualWriteKey = writeKey === CONSTANTS.STORED_VALUE ? this.writeKey : writeKey;
    api = new SendEvent(actualDataPlane, actualWriteKey);
    if (event.toLowerCase() === "identify") {
        let test_payload = {
            "userId": "identified user id",
            "anonymousId": "anon-id-new",
            "context": {
                "traits": {
                    "trait1": "new-val"
                },
                "ip": "14.5.67.21",
                "library": {
                    "name": "http"
                }
            },
            "timestamp": "2020-02-02T00:23:09.544Z"
        }
        let response = await api.identify(test_payload);
        logger.info(`Event "${event}" has been fired to ${actualDataPlane}`);
    }
})
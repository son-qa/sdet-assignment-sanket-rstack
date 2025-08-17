import {PlaywrightModule} from "./utilities/playwright-module";
import {HomePage} from "./pages/home";
import {DestinationPage} from "./pages/destination";
import {Protocol} from "playwright-core/types/protocol";
import {config} from "dotenv";
import {SendEvent} from "./utilities/api-module";





async function run() {
    let pw = new PlaywrightModule();
    await pw.start();
    let page = pw.page;
    let home = new HomePage(page);
    let destination = new DestinationPage(page);
    await home.login('https://app.rudderstack.com', 'yamani7216@baxidy.com', 'Sanketoswal@123');
    await home.visitConnectionsPage();
    let dataPlane = await home.getDataPlane();
    console.log(dataPlane);
    let writeKey = await home.getWriteKey('Test Source');
    console.log(writeKey);
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
    let api = new SendEvent(dataPlane, writeKey);
    let response = await api.identify(test_payload);
    // console.log(response);
    await home.selectDestinationCard('Test Destination');
    await destination.changeMenu('Events');
    let count = await destination.getMetricCount();
    console.log(count);
    await pw.stop()
}

run()
    .then(() => console.log("Run completed successfully"))
    .catch(err => console.error("Run failed:", err));


// (async () => {
//     await run();
// })();




// import {PlaywrightModule} from "./utilities/playwright-module";
// import {HomePage} from "./pages/home";
// import {DestinationPage} from "./pages/destination";
// import {Protocol} from "playwright-core/types/protocol";
// import {config} from "dotenv";
// import {SendEvent} from "./utilities/api-module";
//
//
//
//
//
// async function run() {
//     let pw = new PlaywrightModule();
//     await pw.start();
//     let page = pw.page;
//     let home = new HomePage(page);
//     let destination = new DestinationPage(page);
//     await home.login('https://app.rudderstack.com', 'yamani7216@baxidy.com', 'Sanketoswal@123');
//     await home.visitConnectionsPage();
//     let dataPlane = await home.getDataPlane();
//     console.log(dataPlane);
//     let writeKey = await home.getWriteKey('Test Source');
//     console.log(writeKey);
//     let test_payload = {
//         "userId": "identified user id",
//         "anonymousId": "anon-id-new",
//         "context": {
//             "traits": {
//                 "trait1": "new-val"
//             },
//             "ip": "14.5.67.21",
//             "library": {
//                 "name": "http"
//             }
//         },
//         "timestamp": "2020-02-02T00:23:09.544Z"
//     }
//     let api = new SendEvent(dataPlane, writeKey);
//     let response = await api.identify(test_payload);
//     // console.log(response);
//     await home.selectDestinationCard('Test Destination');
//     await destination.changeMenu('Events');
//     let count = await destination.getMetricCount();
//     console.log(count);
//     await pw.stop()
// }
//
// run()
//     .then(() => console.log("Run completed successfully"))
//     .catch(err => console.error("Run failed:", err));
//
//
// // (async () => {
// //     await run();
// // })();



let h = false

const headless = h
    ? process.env.HEADLESS === "true"
    : true;

console.log(`headless: ${headless}`);



// const bigChocolateWeight = 5;
// const smallChocolateWeight = 1;
// function makeChocolate(small, big, goal) {
//     // let totalBigWeight = bigChocolateWeight * big;
//     // let totalWeight = totalBigWeight + small;
//     //
//     // if (totalWeight >= goal) {
//     //     if (totalWeight === goal) {
//     //         return small;
//     //     }
//     //     else if (totalBigWeight === goal) {
//     //         return 0;
//     //     }
//     //     else if (totalBigWeight < goal) {
//     //         let requiredSmall = goal - totalBigWeight;
//     //         if (small < requiredSmall) {
//     //             return -1;
//     //         }
//     //         else if (small === requiredSmall) {
//     //             return small;
//     //         }
//     //         else if (small > requiredSmall) {
//     //             return requiredSmall;
//     //         }
//     //     }
//     //     else if (totalBigWeight > goal) {
//     //         if (goal % bigChocolateWeight === 0) {
//     //             return 0;
//     //         }
//     //         else {
//     //             let requiredSmall = goal % bigChocolateWeight;
//     //             if (small < requiredSmall) {
//     //                 return -1;
//     //             }
//     //             else if (small === requiredSmall) {
//     //                 return small;
//     //             }
//     //             else if (small > requiredSmall) {
//     //                 return requiredSmall;
//     //             }
//     //         }
//     //     }
//     // }
//     // else {
//     //     return -1;
//     // }
//
//     // Step 1: determine how many big bars to use
//     const bigBarsUsed = Math.min(big, Math.floor(goal / 5));
//
//     // Step 2: calculate remaining weight needed
//     const remaining = goal - bigBarsUsed * 5;
//
//     // Step 3: check if we can cover remaining with small bars
//     if (remaining > small) {
//         return -1; // not enough small bars
//     }
//
//     return remaining; // number of small bars needed
//
// }
//
// let cases = [
//     [4,1,9],
//     [4,1,10],
//     [4,1,7],
//     [4,0,7],
//     [0,1,7],
//     [0,1,0],
//     [4,3,11],
//     [5,0,5],
//     [1,3,12],
//     [4,2,10],
// ]
//
// for(let c of cases){
//     console.log(`${c} = ${makeChocolate(c[0], c[1], c[2])}`);
// }


// // empty bottle exchange
// const required_empty_to_exchange = 5
// function drinks(initial) {
//     let total = initial;
//     let full = initial;
//     let empty = 0;
//     while (full){
//         full--;
//         empty++;
//         if (empty == 5){
//             full++;
//             total++;
//             empty = 0;
//         }
//     }
//     return total;
// }
// cases = [0, 1, 5, 9, 10, 20, 21]
// for (let i of cases) {
//     console.log(`Initial = ${i}, Total = ${drinks(i)}`);
// }


let text = "The rain in SPAIN stays mainly in the plain";
const myArr = text.match("ain");
console.log(`Length = ${myArr.length}, array = ${myArr}`);
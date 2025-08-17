# Test Automation Framework

This project holds automated tests, that are generated using **Playwright (TypeScript)**. The tests follow a BDD pattern and **Cucumber.js** is used to implement that.
Folder structure follows the POM design pattern. For reporting Multiple Cucumber HTML Report package is used.

---

## Setup
    - Install node.js (>=v22.17.1)
    - Clone repo https://github.com/son-qa/sdet-assignment-sanket-rstack.git
    - cd <cloned repo path>
    - Install dependencies using `npm install`
    - Install playwright browsers using `npx playwright install`
    - In root folder create env file for the desired environment, for e.g. ".env.qa" (default env is QA env), and insert following keys with their values
        - BASE_URL
        - USEREMAIL
        - PASSWORD
    
Notes:
- Logs can be found in logs folder in the root directory (create "logs" folder if it does not exist)
- Reports can be found under the report folder available in the root directory (create "reports" folder if it does not exist)
- Screenshots would be captured (only if a scenario/test fails) under the screenshots folder available in the root directory (create "screenshots" folder if it does not exist)

---
## Test execution and reporting

**By default, the tests run in headless mode, set HEADLESS flag to false in environment if headed mode is required**

To only execute tests `npm run test` (by default it will run in QA env)

To generate reports once tests are executed run `npm run report`

To run everything at once, say on QA env, execute `npm run test:qa:report`

Refer `scripts` object in package.json for more information

---
## GitHub Actions Workflow

Workflow file is located at `./github/workflows/end-to-end-tests.yml`.

Workflow will automatically trigger when any commit is pushed to the master branch.

### Scheduled execution
Scheduled test execution can be easily setup by adding or updating the schedule trigger in the workflow YAML file

For example, to run tests daily at 6 AM add this to workflow’s on: section:
schedule:
```
on:
  schedule:
    - cron: '0 6 * * *'
```

**NOTE** - scheduled workflows consumes GitHub Actions monthly quota hence it has not been added in to the workflow file

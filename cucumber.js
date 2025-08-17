module.exports = {
    default: `--require-module ts-node/register 
            --require ./steps/**/*.ts 
            --require ./support/**/*.ts 
            --format progress 
            --format json:./reports/cucumber_report.json`
};

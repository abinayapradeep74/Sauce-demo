module.exports = {
  default: {
    paths: ['features/**/*.feature'],
    requireModule: ['ts-node/register'],
    require: ['step-definitions/**/*.ts', 'hooks/**/*.ts'],
    format: [
            'progress',
            'html:reports/cucumber-report.html',
            'allure-cucumberjs/reporter'
        ],
    publishQuiet: true,
timeout: 30000,
    retry: 1
  }
};

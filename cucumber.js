module.exports = {
  default: {
    paths: ['features/**/*.feature'],
    requireModule: ['ts-node/register'],
    require: ['step-definitions/**/*.ts', 'hooks/**/*.ts'],
    format: ['progress'],
    publishQuiet: true,
timeout: 30000
  }
};
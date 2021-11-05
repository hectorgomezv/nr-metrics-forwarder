/**
 * This is an azure function to collect logs data from EventHub and send it to New Relic logs API.
 *    Author: Amine Benzaied
 *    Team: Expert Services
 */

const { LogsProcessor, MetricsProcessor } = require('./processors');

const { NR_LICENSE_KEY, NR_INSERT_KEY } = process.env;

const checkLicense = (context) => {
  if (!NR_LICENSE_KEY && !NR_INSERT_KEY) {
    const errMsg = 'You have to configure either your LICENSE key or insights INSERT key. Please follow the instructions in README';
    context.log.error(errMsg);

    throw new Error(errMsg);
  }
};

const main = async (context, eventHubMessages) => {
  checkLicense(context);

  context.log(MetricsProcessor.extractMetrics(eventHubMessages));
  await LogsProcessor.processLogs(context, eventHubMessages);
};

module.exports = main;

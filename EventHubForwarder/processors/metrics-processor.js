const process = messages => ({
  length: messages.length,
  isMetrics: messages.map(m => m.metricName),
});

module.exports = {
  process,
};

const isMetricsEvent = e => (Array.isArray(e.records) && e.records.some(r => r.metricName));

const parseMetrics = ({ metricName, resourceId, time }) => ({
  metricName,
  resourceId,
  time,
});

const extractMetrics = events => events
  .filter(e => isMetricsEvent(e))
  .map(e => parseMetrics(e.records));

module.exports = {
  extractMetrics,
};

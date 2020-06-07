const getTimings = require('./helper');

var timingsCache = {};
var refreshRate = 30;

function refreshCache() {
    getTimings(timings => {
        timingsCache = timings;
    });
}

setInterval(refreshCache, refreshRate * 1000);
refreshCache();

module.exports.getTimings = () => JSON.parse(JSON.stringify(timingsCache));
module.exports.setRefreshInterval = interval => refreshRate = interval;

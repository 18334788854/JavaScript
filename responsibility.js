var LogLevel = {
    INFO: 'INFO',
    WARN: 'WARN',
    ERROR: 'ERROR'
}, log;
function LogFormatter(logLevel) {
    this.logLevel = logLevel;
}
LogFormatter.prototype = {
    nextInChain: null,
    setNextInChain: function (next) {
        this.nextInChain = next;
    },
    createLogMessage: function (message, logLevel) {
        var returnValue;
        if (this.logLevel === logLevel) {
            if (logLevel === LogLevel.ERROR) {
                returnValue = logLevel + ":" + message.toUpperCase();
            } else if (logLevel === LogLevel.WARN) {
                returnValue = logLevel + ":" + message;
            } else {
                returnValue = message;
            }
        } else if (this.nextInChain) {
            returnValue = this.nextInChain.createLogMessage(message, logLevel);
        }
        return returnValue;
    }
};
log = (function () {
    var logs = [],
        infoLogger = new LogFormatter(LogLevel.INFO),
        warnLogger = new LogFormatter(LogLevel.WARN),
        errorLogger = new LogFormatter(LogLevel.ERROR),
        logger = errorLogger;
    errorLogger.setNextInChain(warnLogger);
    warnLogger.setNextInChain(infoLogger);
    return {
        getLogs: function () {
            return logs.join('\n');
        },
        message: function (message, logLevel) {
            var logMessage = logger.createLogMessage(message, logLevel);
            logs.push(logMessage);
        }
    }
}());
log.message("Something vary bad happened",LogLevel.ERROR);
log.message("Something bad happened",LogLevel.WARN);
log.message("Something happened",LogLevel.INFO);

console.log(log.getLogs());
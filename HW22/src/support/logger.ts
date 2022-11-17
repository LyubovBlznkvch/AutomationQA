import * as log4js from "log4js";
const dateFormat = "%d{[dd/MM/yyyy] [hh:mm:ss]} [%p] - %m";

log4js.configure({
    appenders: {
        fullLog: {
            type: 'file',
            filename: "./HW22/logs/fullLog.log",
            layout: {
                type: "pattern",
                pattern: dateFormat
            }
        },
        justErrors: {
            type: "logLevelFilter",
            appender: "errorLog",
            level: "error"
        },
        console: {
            type: "console",
            layout: {
                type: "basic"
            }
        }
    },
    categories: {
        default: {
            appenders: ["fullLog", "console", "justErrors"], level: "debug"
        }
    }
})

export const logger = log4js.getLogger();
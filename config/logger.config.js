import winston from "winston";
import path from "path";
import { LOG } from "./app.config";

const logger = winston.createLogger({
  level: "debug",
  format: winston.format.json(),
  transports: [
    new winston.transports.Console({
      format: winston.format.simple(),
      level: "info"
    }),
    // new winston.transports.File({
    //   filename: path.join("/Users/vg/Projects/logs", `ptb_error.log`),
    //   level: "error",
    // }),
    new winston.transports.File({
      filename: path.join(LOG.PATH, LOG.FILENAME),
      format: winston.format.printf(
        info =>
          `${info.level.toUpperCase()} :: ${new Date().toLocaleString()} ==> ${
            info.message
          } `
      ),
      level: "debug"
    })
  ]
});

export default logger;

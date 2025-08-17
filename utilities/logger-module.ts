import { createLogger, format, transports } from "winston";
import {CONFIG} from "../config";

const logger = createLogger({
    level: "info",
    format: format.combine(
        format.timestamp(),
        format.printf(({ level, message, timestamp }) => {
            return `[${level.toUpperCase()}] ${timestamp} - ${message}`;
        })
    ),
    transports: [
        // new transports.Console(),
        new transports.File({ filename: `${CONFIG.paths.log}/verbose.log` }),
    ],
});

export default logger;
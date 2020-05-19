import Server from "./server";
import logger from "../config/logger.config";

logger.info(`Environment => ${process.env.NODE_ENV}`);

const server = new Server();

server.init();

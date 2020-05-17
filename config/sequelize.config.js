import Sequelize from "sequelize";
import { DB } from "./app.config";
import logger from "./logger.config";

export const sequelize = new Sequelize(DB.schema, DB.username, DB.password, {
  host: DB.host,
  dialect: "mysql",
  logging: message => {
    logger.debug(message);
  }
});

// (async () => {
//   await sequelize.sync();
// })();

import Sequelize from "sequelize";
import logger from "./logger.config";

const getDBConfiguration = () => {
  if (process.env.NODE_ENV && process.env.NODE_ENV !== "development") {
    const dbconfig = process.env.GH_DB_CONFIG;

    if (dbconfig) {
      const db_config = JSON.parse(dbconfig);
      logger.info(
        `DB configuraiton: HOST=${db_config.host} & SCHEMA=${db_config.schema}`
      );
      return db_config;
    }

    logger.error(`DB configuration string not found in the environment`);
  }
  return {
    host: "192.168.1.48",
    schema: "gh_b",
    username: "dev",
    password: "dev1234"
  };
};

const DB = getDBConfiguration();

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

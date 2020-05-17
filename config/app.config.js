const HOME_DIR = require("os").homedir();

export const SERVER = {
  PORT: 4040
};

export const DB = (() => {
  if (process.env.NODE_ENV && process.env.NODE_ENV !== "development") {
    const dbconfig = process.env.GH_DB_CONFIG;
    if (dbconfig) {
      return JSON.parse(dbconfig);
    } else {
      console.error(`DB configuration string not found in environment`);
    }
  } else {
    return {
      host: "192.168.1.48",
      schema: "gh_b",
      username: "dev",
      password: "dev1234"
    };
  }
})();

export const LOG = {
  PATH: `${HOME_DIR}/logs/gh`,
  FILENAME: "gh_debug.log",
  LEVEL: "debug"
};

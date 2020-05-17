const HOME_DIR = require("os").homedir();

export const SERVER = {
  PORT: 4040
};

export const DB = {
  host: "192.168.1.48",
  port: "3306",
  username: "dev",
  password: "dev1234",
  database: "gh_b"
};

export const LOG = {
  PATH: `${HOME_DIR}/logs/gh`,
  FILENAME: "gh_debug.log",
  LEVEL: "debug"
};

const HOME_DIR = require("os").homedir();

export const SERVER = {
  PORT: 4040
};

export const LOG = {
  PATH: `${HOME_DIR}/logs/gh`,
  FILENAME: "gh_debug.log",
  LEVEL: "debug"
};

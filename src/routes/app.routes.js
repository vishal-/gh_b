import path from "path";

const getFile = (filename) => path.join(__dirname, "../../static/", filename);

const AppRoutes = {
  favicon: {
    PATH: "/favicon.ico",

    GET: (req, res) => {
      res.sendFile(getFile("img/favicon.ico"));
    }
  },

  default: {
    PATH: "*",

    GET: (req, res) => {
      res.status(404).sendFile(getFile("html/404.html"));
    }
  }
};

export default AppRoutes;

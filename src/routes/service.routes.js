import logger from "../../config/logger.config";
import ServiceController from "../controllers/service.controller";

const sc = new ServiceController();

const ServiceRoutes = {
  PATH: "/service",

  GET: async (req, res) => {
    logger.debug(`Fetching services`);

    res.send(await sc.fetch());
  },

  POST: async (req, res) => {
    logger.debug(`Adding a new service: ${JSON.stringify(req.body)}`);

    await sc
      .add(req.body)
      .then(r => {
        res.send(r);
      })
      .catch(e => {
        logger.error(`Error while adding service: ${e}`);
        res.status(500).send(e.toString());
      });
  },

  PUT: () => {},

  DELETE: () => {}
};

export default ServiceRoutes;

import OfferingController from "../controllers/offering.controller";
import logger from "../../config/logger.config";

const oc = new OfferingController();

const OfferingRoutes = {
  PATH: "/offering",

  GET: async (req, res) => {
    logger.debug(`Fetching offerings`);
    res.send(await oc.fetch());
  },

  POST: async (req, res) => {
    logger.debug(`Adding a new offering ${JSON.stringify(req.body)}`);

    await oc
      .add(req.body)
      .then(r => {
        res.send(r);
      })
      .catch(e => {
        logger.error(`Error while adding offering: ${e}`);
        res.status(500).send(e.toString());
      });
  },

  PUT: (req, res) => {},

  DELETE: (req, res) => {}
};

export default OfferingRoutes;

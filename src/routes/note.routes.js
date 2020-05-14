import NoteController from "../controllers/note.controller";
import logger from "../../config/logger.config";

const nc = new NoteController();

const NoteRoutes = {
  PATH: "/note",

  GET: async (req, res) => {
    logger.debug(`Fetch note for id: ${req.query.id}`);

    await nc
      .fetchById(req.query.id)
      .then(r => {
        res.send(r);
      })
      .catch(e => {
        logger.error(`Unable to get note: ${e.toString()}`);
        res.status(500).send(e.toString());
      });
  },

  POST: async (req, res) => {
    logger.debug(`Add a new note ${JSON.stringify(req.body)}`);

    res.send(await nc.add(req.body));
  }
};

export default NoteRoutes;

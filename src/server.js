import Express from "express";
import { SERVER } from "../config/app.config";
import { AppRoutes, NoteRoutes, OfferingRoutes } from "./routes/index";
import logger from "../config/logger.config";

export default class Server {
  port = SERVER.PORT;
  app = new Express();

  addRoutes = () => {
    this.app.route(AppRoutes.favicon.PATH).get(AppRoutes.favicon.GET);

    this.app.route(NoteRoutes.PATH).get(NoteRoutes.GET).post(NoteRoutes.POST);

    this.app
      .route(OfferingRoutes.PATH)
      .get(OfferingRoutes.GET)
      .post(OfferingRoutes.POST);

    this.app.route(AppRoutes.default.PATH).get(AppRoutes.default.GET);
  };

  addMiddlewares = () => {
    this.app.use(Express.json());
  };

  startListening = () => {
    this.app.listen(this.port, () => {
      logger.info(`Server started on port ${this.port}`);
    });
  };

  init = () => {
    this.addMiddlewares();
    this.addRoutes();
    this.startListening();
  };
}

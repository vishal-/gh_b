import Service from "../models/service";
import { capitalize } from "../utils/s.utils";

class ServiceController {
  add = async ({ name, title, subtext, description = "", offering_id }) => {
    await Service.create({
      name: name.toLowerCase(),
      title: title.toLowerCase(),
      subtext: subtext.toLowerCase(),
      description,
      offering_id
    });
  };

  fetch = async () => await Service.findAll();
}

export default ServiceController;

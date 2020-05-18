import Offering from "../models/offering";
import { capitalize } from "../utils/s.utils";

class OfferingController {
  add = async ({ name, title, subtext, description = "" }) =>
    await Offering.create({
      name: name.toLowerCase(),
      title: capitalize(title),
      subtext: subtext.toLowerCase(),
      description
    });

  fetch = async () => await Offering.findAll();

  fetchById = async id => await Offering.findOne({ where: { id } });
}

export default OfferingController;

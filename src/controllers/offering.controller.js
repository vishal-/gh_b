import Offering from "../models/offering";
import { capitalize } from "../utils/s.utils";

class OfferingController {
  add = async ({ title, headline, description }) =>
    await Offering.create({
      title: title.toLowerCase(),
      headline: capitalize(headline),
      description
    });

  fetch = async () => await Offering.findAll();

  fetchById = async id => await Offering.findOne({ where: { id } });
}

export default OfferingController;

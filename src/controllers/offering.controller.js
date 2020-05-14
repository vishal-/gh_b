import Offering from "../models/offering";
import { capitalize } from "../utils/s.utils";

class OfferingController {
  add = async ({ title, description }) =>
    await Offering.create({ title: capitalize(title), description });

  fetch = async () => await Offering.findAll();

  fetchById = async id => await Offering.findOne({ where: { id } });
}

export default OfferingController;

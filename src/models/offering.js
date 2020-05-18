import Sequelize from "sequelize";
import { sequelize } from "../../config/sequelize.config";

class Offering extends Sequelize.Model {}

Offering.init(
  {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    title: { type: Sequelize.STRING, allowNull: false, unique: true },
    headline: { type: Sequelize.STRING(100), allowNull: false },
    description: { type: Sequelize.TEXT, allowNull: false },
    active: { type: Sequelize.BOOLEAN, defaultValue: true }
  },
  {
    sequelize,
    timestamps: true,
    modelName: "offering"
  }
);

Offering.sync({ alter: true });

export default Offering;

import Sequelize from "sequelize";
import { sequelize } from "../../config/sequelize.config";

class Offering extends Sequelize.Model {}

Offering.init(
  {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: Sequelize.STRING, allowNull: false, unique: true },
    title: { type: Sequelize.STRING, allowNull: false },
    subtext: { type: Sequelize.STRING(100), allowNull: false },
    description: { type: Sequelize.TEXT, allowNull: false },
    active: { type: Sequelize.BOOLEAN, defaultValue: true }
  },
  {
    sequelize,
    timestamps: true,
    modelName: "offering",
    tableName: "gh_offerings"
  }
);

Offering.sync({ force: true });

export default Offering;

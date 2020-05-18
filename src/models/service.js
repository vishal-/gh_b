import Sequelize from "sequelize";
import { sequelize } from "../../config/sequelize.config";
import Offering from "./offering";

class Service extends Sequelize.Model {}

Service.init(
  {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    offering_id: { type: Sequelize.INTEGER, allowNull: false },
    name: { type: Sequelize.STRING, allowNull: false, unique: true },
    title: { type: Sequelize.STRING, allowNull: false },
    subtext: { type: Sequelize.STRING(100), allowNull: false },
    description: { type: Sequelize.TEXT, allowNull: false },
    active: { type: Sequelize.BOOLEAN, defaultValue: true, allowNull: false }
  },
  {
    sequelize,
    timestamps: true,
    modelName: "service",
    tableName: "gh_services"
  }
);

Service.sync({ force: true });

export default Service;

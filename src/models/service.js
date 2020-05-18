import Sequelize from "sequelize";
import { sequelize } from "../../config/sequelize.config";

class Service extends Sequelize.Model {}

Service.init(
  {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    headline: {
      type: Sequelize.STRING(100),
      allowNull: false
    },
    description: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    active: {
      type: Sequelize.BOOLEAN,
      defaultValue: true,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: true,
    modelName: "service"
  }
);

Service.belongsTo(Offering);

Service.sync({ alter: true });

export default Service;

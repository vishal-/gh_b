import Sequelize from "sequelize";
import { sequelize } from "../../config/sequelize.config";

class Note extends Sequelize.Model {}

Note.init(
  {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    title: { type: Sequelize.STRING, allowNull: false },
    content: { type: Sequelize.TEXT, allowNull: false }
  },
  {
    sequelize,
    timestamps: false,
    modelName: "note"
  }
);

// Note.sync({ alter: true });

export default Note;

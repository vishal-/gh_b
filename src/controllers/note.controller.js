import Note from "../models/note";

class NoteController {
  add = async ({ title, content }) => await Note.create({ title, content });

  fetch = async () => await Note.findAll();

  fetchById = async (id) => await Note.findOne({ where: { id } });
}

export default NoteController;

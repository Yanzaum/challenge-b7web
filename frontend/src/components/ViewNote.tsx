import axios from "axios";
import { useState } from "react";
import { config } from "../config";
import { colors } from "./NewNote";

export interface Note {
  id?: string;
  title: string;
  description: string;
  color: string;
  createdAt?: string;
  updatedAt?: string;
}

interface Props {
  note: Note;
  handleAllNotes: () => void;
}

export default function ViewNote({ note, handleAllNotes }: Props) {
  const [edit, setEdit] = useState(false);
  const [title, setTitle] = useState(note.title);
  const [description, setDescription] = useState(note.description);
  const [color, setColor] = useState(note.color);
  const handleSubmit = () => {
    axios.put(`${config.API_URL}/notas/${note.id}`, {
      title,
      description,
      color,
    });
    setEdit(true);
  };

  return (
    <div className="flex justify-center items-center">
      <div
        className="w-full max-w-lg bg-white p-4 border-t-8 border-white"
        style={{ borderColor: note.color }}
      >
        <div className="flex justify-between">
          <button
            className="uppercase font-bold"
            onClick={() => handleAllNotes()}
          >
            ⬅️ Voltar
          </button>
          <button
            className="uppercase font-bold"
            onClick={() => setEdit(!edit)}
          >
            ✏️ Editar
          </button>
        </div>
        {edit ? (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <input
              className="text-2xl lg:text-4xl font-bold p-2 text-center"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              className="lg:text-xl text-justify p-2"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <select
              className="p-2"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            >
              <option disabled>Selecione uma cor</option>
              {colors.map((color, key) => (
                <option
                  key={key}
                  value={color}
                  style={{ backgroundColor: color }}
                >
                  {color}
                </option>
              ))}
            </select>
            <button
              type="submit"
              className="mt-2 text-white p-4 w-auto font-bold"
              style={{ backgroundColor: color }}
            >
              Salvar edição
            </button>
          </form>
        ) : (
          <div className="flex flex-col">
            <h1 className="text-center text-2xl lg:text-4xl uppercase font-bold p-2">
              {note.title}
            </h1>
            <p className="lg:text-xl text-justify">{note.description}</p>
          </div>
        )}
      </div>
    </div>
  );
}

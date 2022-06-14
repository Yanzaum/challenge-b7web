import { useState } from "react";
import { Note } from "./ViewNote";

interface Props {
  /* onDelete: (note: Note) => void;
  onEdit: (note: Note) => void; */
  handleShowModal: (show: boolean) => void;
  handleAddNote: (note: Note) => void;
}

export const colors = ["#f44336", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5"];

export default function NewNote({ handleShowModal, handleAddNote }: Props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [color, setColor] = useState(colors[0]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleAddNote({ title, description, color });
    handleShowModal(false);
  };

  return (
    <div className="flex justify-center">
      <div className="w-full mx-10">
        <form className="mt-5" onSubmit={handleSubmit}>
          <div className="relative z-0 w-full mb-6">
            <input
              type="text"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <label className="peer-focus:font-medium absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Título
            </label>
          </div>

          <div className="relative z-0 w-full mb-6">
            <textarea
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={description}
              required
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>

            <label className="peer-focus:font-medium absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Descrição
            </label>
          </div>

          <div className="relative z-0 w-full mb-6">
            <select
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              required
              value={color}
              onChange={(e) => setColor(e.target.value)}
            >
              <option disabled>Selecione uma cor</option>
              {colors.map((color, index) => (
                <option
                  style={{ backgroundColor: color }}
                  key={index}
                  value={color}
                >
                  {color}
                </option>
              ))}
            </select>

            <label className="peer-focus:font-medium absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Cor
            </label>
          </div>

          <button
            type="submit"
            className="focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-10 mt-2 text-white p-4 w-full hover:opacity-80"
            style={{ backgroundColor: color }}
          >
            Criar anotação
          </button>
        </form>
      </div>
    </div>
  );
}

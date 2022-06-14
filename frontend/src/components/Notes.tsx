import axios from "axios";
import { useEffect, useState } from "react";
import { ReactComponent as Eye } from "../assets/eye.svg";
import { ReactComponent as Trash } from "../assets/trash.svg";
import NewAnnotation from "./NewNote";
import ViewNote, { Note } from "./ViewNote";
import { config } from "../config";

export default function Notes() {
  const [showAllNotes, setShowAllNotes] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [showNote, setShowNote] = useState(false);
  const [noteSelected, setNoteSelected] = useState({
    id: "",
    title: "",
    description: "",
    color: "",
    createdAt: "",
    updatedAt: "",
  } as Note);
  const [notes, setNotes] = useState<Note[]>([]);

  const handleNote = (note: Note) => {
    setNoteSelected(note);
    setShowNote(true);
    setShowAllNotes(false);
  };

  const handleAllNotes = () => {
    setShowNote(false);
    setShowAllNotes(true);
  };

  const handleAddNote = (note: Note) => {
    axios
      .post(`${config.env.API_URL}/notas`, note)
      .then((response) => {
        setNotes([...notes, note]);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleDeleteNote = (id: string) => {
    axios
      .delete(`${config.env.API_URL}/notas/${id}`)
      .then((response) => {
        setNotes(notes.filter((note) => note.id !== id));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleShowModal = (show: boolean) => {
    setShowModal(show);
  };

  useEffect(() => {
    axios.get(`${config.env.API_URL}/notas`).then((response) => {
      setNotes(response.data.data);
    });
  }, []);

  return (
    <>
      {showAllNotes && (
        <ul className="list-none grid md:grid-cols-3 lg:grid-cols-4 gap-3">
          {notes.map((item, index) => (
            <li
              key={index}
              className={`p-4 bg-white border-l-4 w-screen md:w-full`}
              style={{ borderColor: item.color }}
            >
              <div className="flex justify-between">
                <h1 className="text-2xl font-semibold">{item.title}</h1>
                <div className="flex items-center">
                  <button
                    className="mr-2"
                    onClick={() => handleNote(item as Note)}
                  >
                    <Eye className="w-6 h-6" />
                  </button>
                  <button
                    className="ml-2"
                    onClick={() => handleDeleteNote(item.id as string)}
                  >
                    <Trash className="w-6 h-6" />
                  </button>
                </div>
              </div>
              <p className="text-sm truncate">{item.description}</p>
            </li>
          ))}
        </ul>
      )}

      {showNote && (
        <>
          <ViewNote note={noteSelected} handleAllNotes={handleAllNotes} />
        </>
      )}

      <div className="flex items-center justify-center my-10">
        <button
          className="bg-white p-4 w-auto"
          type="button"
          onClick={() => setShowModal(true)}
        >
          <h1 className="text-xl text-center font-bold">
            Criar nova anotação ➕
          </h1>
        </button>
      </div>

      {showModal && (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-black bg-black/90">
            <div className="relative w-full my-6 mx-auto max-w-2xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Criar nova anotação
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ❌
                    </span>
                  </button>
                </div>

                <NewAnnotation
                  handleShowModal={handleShowModal}
                  handleAddNote={handleAddNote}
                />
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      )}
    </>
  );
}

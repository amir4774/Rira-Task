import { useContext, createContext, ReactNode, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { DateType, GlobalContextType, NotesType } from "./Interfaces";

const GlobalContext = createContext<GlobalContextType | null>(null);

const initialNotes: NotesType[] = JSON.parse(
  localStorage.getItem("notes") || "[]"
) as NotesType[];

const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [notes, setNotes] = useState<NotesType[]>(initialNotes);

  const addNotes = (newNotes: Omit<NotesType, "id">) => {
    setNotes([...notes, { ...newNotes, id: uuidv4() }]);
    localStorage.setItem("notes", JSON.stringify([...notes, newNotes]));
  };

  const updateNote = (id: string, updatedNote: NotesType) => {
    setNotes(notes.map((note) => (note.id === id ? updatedNote : note)));
    localStorage.setItem(
      "notes",
      JSON.stringify(notes.map((note) => (note.id === id ? updatedNote : note)))
    );
  };

  const deleteNote = (id: string) => {
    setNotes(notes.filter((note) => note.id !== id));
    localStorage.setItem(
      "notes",
      JSON.stringify(notes.filter((note) => note.id !== id))
    );
  };

  const convertDate = (date: DateType) => {
    return `${date.year}-${String(date.month).padStart(2, "0")}-${String(
      date.day
    ).padStart(2, "0")}`;
  };

  return (
    <GlobalContext.Provider
      value={{ notes, addNotes, convertDate, deleteNote, updateNote }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;

export const useGlobalContext = () =>
  useContext(GlobalContext) as GlobalContextType;

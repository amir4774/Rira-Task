import { useContext, createContext, ReactNode, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { DateType, GlobalContextType, NotesType } from "./Interfaces";

const GlobalContext = createContext<GlobalContextType | null>(null);

const initialNotes: NotesType[] = JSON.parse(
  localStorage.getItem("notes") || "[]"
) as NotesType[];

const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [notes, setNotes] = useState<NotesType[]>(initialNotes);

  const addNotes = (newNote: Omit<NotesType, "id">) => {
    const newNotes = [...notes, { ...newNote, id: uuidv4() }];
    setNotes(newNotes);
    localStorage.setItem("notes", JSON.stringify(newNotes));
  };

  const updateNote = (id: string, updatedNote: NotesType) => {
    const newNotes = notes.map((note) => (note.id === id ? updatedNote : note));
    setNotes(newNotes);
    localStorage.setItem("notes", JSON.stringify(newNotes));
  };

  const updateDraggedNote = (newNotes: NotesType[]) => {
    setNotes(newNotes);
    localStorage.setItem("notes", JSON.stringify(newNotes));
  };

  const calculateDate = (submittedDate: string, deadLine: string) => {
    if (submittedDate.split("-").join("") <= deadLine.split("-").join("")) {
      return true;
    }
    return false;
  };

  const convertDate = (date: DateType) => {
    return `${date.year}-${String(date.month).padStart(2, "0")}-${String(
      date.day
    ).padStart(2, "0")}`;
  };

  const deleteNote = (id: string) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
    localStorage.setItem("notes", JSON.stringify(newNotes));
  };

  return (
    <GlobalContext.Provider
      value={{
        notes,
        updateDraggedNote,
        addNotes,
        deleteNote,
        updateNote,
        calculateDate,
        convertDate,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;

export const useGlobalContext = () =>
  useContext(GlobalContext) as GlobalContextType;

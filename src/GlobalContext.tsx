import { useContext, createContext, ReactNode, useState } from "react";
import { DateType, GlobalContextType, NotesType } from "./Interfaces";

const GlobalContext = createContext<GlobalContextType | null>(null);

const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [notes, setNotes] = useState<NotesType[]>([]);

  const updateNotes = (newNotes: NotesType) => {
    setNotes([...notes, newNotes]);
  };

  const convertDate = (date: DateType) => {
    return `${date.year}-${String(date.month).padStart(2, "0")}-${String(
      date.day
    ).padStart(2, "0")}`;
  };

  return (
    <GlobalContext.Provider value={{ notes, updateNotes, convertDate }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;

export const useGlobalContext = () => useContext(GlobalContext);

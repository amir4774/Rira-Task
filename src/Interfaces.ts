import useFormValue from "./hooks/useFormValue";

export interface NotesType {
  text: string;
  submittedDate: string;
  deadLine: string;
  id: string;
}

export interface DateType {
  year: number;
  month: number;
  day: number;
}

export interface GlobalContextType {
  notes: NotesType[];
  addNotes: (newNotes: Omit<NotesType, "id">) => void;
  convertDate: (date: DateType) => string;
  updateNote: (id: string, updatedNote: NotesType) => void;
  deleteNote: (id: string) => void;
}

export interface NotePropsType {
  note: NotesType;
  numberOfNote: number;
}

export interface NoteButtonGroupPropsType
  extends Omit<NotePropsType, "numberOfNote"> {}

export interface NoteTimesPropsType {
  submittedDate: string;
  deadLine: string;
}

export interface EditNotePropsType {
  open: boolean;
  onClose: () => void;
  note: NotesType;
}

export interface FormBodyPropsType {
  textValue: ReturnType<typeof useFormValue>;
  dateValue: ReturnType<typeof useFormValue>;
}

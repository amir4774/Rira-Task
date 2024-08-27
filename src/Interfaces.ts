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
  updateNotes: (newNotes: NotesType) => void;
  convertDate: (date: DateType) => string;
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

export interface DeleteNotePropsType {
  open: boolean;
  onClose: () => void;
  noteId: string;
}

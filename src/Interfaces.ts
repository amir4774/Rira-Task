export interface NotesType {
  text: string;
  submittedDate: string;
  deadLine: string;
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
}

export interface NotePropsType {
  note: NotesType;
  numberOfNote: number;
}

export interface NoteTimesPropsType {
  submittedDate: string;
  deadLine: string;
}

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
} from "@mui/material";
import { useGlobalContext } from "../GlobalContext";
import { EditNotePropsType } from "../Interfaces";
import useFormValue from "../hooks/useFormValue";
import FormBody from "./FormBody";

const EditNote = ({ open, onClose, note }: EditNotePropsType) => {
  const { updateNote } = useGlobalContext();
  const textValue = useFormValue(note.text);
  const dateValue = useFormValue(note.deadLine);

  const handleUpdate = () => {
    if (!textValue.value || !dateValue.value) {
      alert("Please fill all the fields");
      return;
    }

    updateNote(note.id, {
      ...note,
      text: textValue.value,
      deadLine: dateValue.value,
    });
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <DialogContent>
        <DialogContentText>
          <FormBody textValue={textValue} dateValue={dateValue} />
        </DialogContentText>

        <DialogActions>
          <Button onClick={onClose} variant="outlined" fullWidth>
            Cancel
          </Button>
          <Button
            onClick={handleUpdate}
            variant="contained"
            color="success"
            fullWidth
          >
            Submit
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
};

export default EditNote;

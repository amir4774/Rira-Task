import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Typography,
} from "@mui/material";
import { useGlobalContext } from "../GlobalContext";
import { DeleteNotePropsType } from "../Interfaces";

const DeleteNote = ({ open, onClose, noteId }: DeleteNotePropsType) => {
  const { deleteNote } = useGlobalContext();

  const handleDelete = () => {
    onClose();
    deleteNote(noteId);
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <DialogContent>
        <DialogContentText>
          <Typography textAlign="center" mb={3} fontSize={18}>
            Are you sure you want to delete this note?
          </Typography>
        </DialogContentText>

        <DialogActions>
          <Button onClick={onClose} variant="outlined" fullWidth>
            Cancel
          </Button>
          <Button
            onClick={handleDelete}
            variant="contained"
            color="error"
            fullWidth
          >
            Delete
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteNote;

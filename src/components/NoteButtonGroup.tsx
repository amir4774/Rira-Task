import { Delete, Edit } from "@mui/icons-material";
import { Button, ButtonGroup, Tooltip } from "@mui/material";
import EditNote from "./EditNote";
import useBoolean from "../hooks/useBoolean";
import { NoteButtonGroupPropsType } from "../Interfaces";
import { useGlobalContext } from "../GlobalContext";

const NoteButtonGroup = ({ note }: NoteButtonGroupPropsType) => {
  const { deleteNote } = useGlobalContext();
  const openEdit = useBoolean();

  const handleDelete = () => {
    deleteNote(note.id);
  };

  return (
    <>
      <ButtonGroup
        sx={{ "& .MuiButtonGroup-grouped": { border: "none" } }}
        variant="text"
      >
        <Tooltip title="Edit">
          <Button color="success" onClick={openEdit.onClick}>
            <Edit />
          </Button>
        </Tooltip>

        <Tooltip title="Delete">
          <Button color="error" onClick={handleDelete}>
            <Delete />
          </Button>
        </Tooltip>
      </ButtonGroup>

      <EditNote
        open={openEdit.value}
        onClose={openEdit.onClick}
        note={note}
      />
    </>
  );
};

export default NoteButtonGroup;

import { Delete, Edit } from "@mui/icons-material";
import { Button, ButtonGroup, Tooltip } from "@mui/material";
import DeleteNote from "./DeleteNote";
import useBoolean from "../hooks/useBoolean";
import { NoteButtonGroupPropsType } from "../Interfaces";

const NoteButtonGroup = ({ note }: NoteButtonGroupPropsType) => {
  const openEdit = useBoolean();
  const openDelete = useBoolean();

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
          <Button color="error" onClick={openDelete.onClick}>
            <Delete />
          </Button>
        </Tooltip>
      </ButtonGroup>

      <DeleteNote
        open={openDelete.value}
        onClose={openDelete.onClick}
        noteId={note.id}
      />
    </>
  );
};

export default NoteButtonGroup;

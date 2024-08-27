import { Delete, Edit } from "@mui/icons-material";
import { Button, ButtonGroup, Tooltip } from "@mui/material";

const NoteButtonGroup = () => {
  return (
    <ButtonGroup
      sx={{ "& .MuiButtonGroup-grouped": { border: "none" } }}
      variant="text"
    >
      <Tooltip title="Edit">
        <Button color="success">
          <Edit />
        </Button>
      </Tooltip>

      <Tooltip title="Delete">
        <Button color="error">
          <Delete />
        </Button>
      </Tooltip>
    </ButtonGroup>
  );
};

export default NoteButtonGroup;

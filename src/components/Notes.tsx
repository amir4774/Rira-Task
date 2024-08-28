import { useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import Note from "./Note";
import { useGlobalContext } from "../GlobalContext";

const Notes = () => {
  const { notes, updateDraggedNote } = useGlobalContext();
  const [draggedNoteIndex, setDraggedNoteIndex] = useState<number | null>(null);

  const handleDragStart = (index: number) => {
    setDraggedNoteIndex(index);
  };

  const handleDragEnter = (index: number) => {
    const newNotes = [...notes];
    const draggedNote = newNotes.splice(draggedNoteIndex as number, 1)[0];
    newNotes.splice(index, 0, draggedNote);
    setDraggedNoteIndex(index);
    updateDraggedNote(newNotes);
  };

  const handleDragEnd = () => {
    setDraggedNoteIndex(null);
  };

  return (
    <Box mt={{ xs: 2, md: 0 }} mb={2}>
      <Typography gutterBottom variant="h4" color="secondary">
        Notes:
      </Typography>

      <Grid container spacing={4}>
        {notes.map((note, index) => (
          <Grid
            item
            xs={12}
            md={6}
            key={note.id}
            draggable
            onDragStart={() => handleDragStart(index)}
            onDragEnter={() => handleDragEnter(index)}
            onDragEnd={handleDragEnd}
          >
            <Note note={note} numberOfNote={index + 1} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Notes;

import { Box, Grid, Typography } from "@mui/material";
import Note from "./Note";
import { useGlobalContext } from "../GlobalContext";

const Notes = () => {
  const { notes } = useGlobalContext();

  return (
    <Box mt={{ xs: 2, md: 0 }} mb={2}>
      <Typography gutterBottom variant="h4" color="secondary">
        Notes:
      </Typography>

      <Grid container spacing={4}>
        {notes.map((note, index) => (
          <Note key={index} note={note} numberOfNote={index + 1} />
        ))}
      </Grid>
    </Box>
  );
};

export default Notes;

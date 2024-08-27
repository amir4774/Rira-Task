import { Card, CardContent, Grid, Stack, Typography } from "@mui/material";
import NoteTimes from "./NoteTimes";
import { NotePropsType } from "../Interfaces";
import NoteButtonGroup from "./NoteButtonGroup";

const Note = ({ note, numberOfNote }: NotePropsType) => {
  return (
    <Grid item xs={12} md={6}>
      <Card sx={{ boxShadow: 5 }}>
        <CardContent sx={{ overflowWrap: "break-word" }}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            mb={2}
          >
            <Typography color="primary" variant="h6" fontWeight={700}>
              Note {numberOfNote}
            </Typography>

            <NoteButtonGroup note={note} />
          </Stack>

          <Typography>{note.text}</Typography>

          <NoteTimes
            submittedDate={note.submittedDate}
            deadLine={note.deadLine}
          />
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Note;

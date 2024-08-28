import { Card, CardContent, Grid, Stack, Typography } from "@mui/material";
import NoteTimes from "./NoteTimes";
import { NotePropsType } from "../Interfaces";
import NoteButtonGroup from "./NoteButtonGroup";

const Note = ({ note, numberOfNote }: NotePropsType) => {
  const NoteBg = () => {
    const today = note.submittedDate
      .split("-")
      .map((item) => Number(item))
      .join("");

    const deadLine = note.deadLine
      .split("-")
      .map((item) => Number(item))
      .join("");

    // If today and deadLine are equal
    if (today === deadLine) {
      return "#ff0";
    }

    return "transparent";
  };

  return (
    <Grid item xs={12} md={6}>
      <Card
        sx={{
          boxShadow: 5,
          bgcolor: `${NoteBg()}`,
        }}
      >
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

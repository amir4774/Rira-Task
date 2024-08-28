import { Card, CardContent, Stack, Typography } from "@mui/material";
import NoteTimes from "./NoteTimes";
import { NotePropsType } from "../Interfaces";
import NoteButtonGroup from "./NoteButtonGroup";

const Note = ({ note, numberOfNote }: NotePropsType) => {
  const noteBg = () => {
    const today = note.submittedDate.split("-").join("");

    const deadLine = note.deadLine.split("-").join("");

    // If today and deadLine are equal
    if (today === deadLine) {
      return "#ff0";
    }

    if (today > deadLine) {
      return "#aaa";
    }

    return "transparent";
  };

  return (
    <Card
      sx={{
        boxShadow: 5,
        bgcolor: `${noteBg()}`,
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
  );
};

export default Note;

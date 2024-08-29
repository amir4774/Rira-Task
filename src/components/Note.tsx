import { Card, CardContent, Stack, Typography } from "@mui/material";
import NoteTimes from "./NoteTimes";
import NoteButtonGroup from "./NoteButtonGroup";
import useToday from "../hooks/useToday";
import { NotePropsType } from "../Interfaces";

const Note = ({ note, numberOfNote }: NotePropsType) => {
  const today = useToday().split("-").join("");

  const noteBg = () => {
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

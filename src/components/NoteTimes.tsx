import { Stack, Typography } from "@mui/material";
import { NoteTimesPropsType } from "../Interfaces";

const NoteTimes = ({ submittedDate, deadLine }: NoteTimesPropsType) => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      mt={2}
    >
      <Typography color="text.secondary" variant="caption">
        Submitted: {submittedDate}
      </Typography>
      <Typography color="text.secondary" variant="caption">
        Deadline: {deadLine}
      </Typography>
    </Stack>
  );
};

export default NoteTimes;

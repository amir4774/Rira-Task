import { Box, Button, TextField } from "@mui/material";
import useFormValue from "../hooks/useFormValue";

const Form = () => {
  const textValue = useFormValue("");
  const dateValue = useFormValue("");

  return (
    <Box width={{ xs: "95%", md: "60%" }} mx="auto" pt={3}>
      <form>
        <TextField
          value={textValue.value}
          onChange={textValue.onChange}
          placeholder="Enter Note..."
          rows={5}
          fullWidth
          multiline
        />

        <input
          type="date"
          className="date-input"
          onChange={dateValue.onChange}
        />

        <Button
          type="submit"
          variant="contained"
          sx={{ width: { xs: "100%", md: "auto" } }}
        >
          Add Note
        </Button>
      </form>
    </Box>
  );
};

export default Form;

import { FormEvent } from "react";
import { Box, Button } from "@mui/material";
import useFormValue from "../hooks/useFormValue";
import { useGlobalContext } from "../GlobalContext";
import FormBody from "./FormBody";
import useToday from "../hooks/useToday";

const Form = () => {
  const { addNotes, calculateDate } = useGlobalContext();
  const textValue = useFormValue("");
  const dateValue = useFormValue("");
  const today = useToday();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (!textValue.value || !dateValue.value) {
      alert("Please fill all the fields!");
      return;
    }

    const newNote = {
      text: textValue.value,
      submittedDate: today,
      deadLine: dateValue.value,
    };

    if (!calculateDate(newNote.submittedDate, newNote.deadLine)) {
      alert("Deadline cannot be before submitted date");
      return;
    }

    addNotes(newNote);

    // Reset the form
    textValue.onChange({ target: { value: "" } });
    dateValue.onChange({ target: { value: "" } });
  };

  return (
    <Box width={{ xs: "100%", md: "60%" }} mx="auto" pt={3}>
      <form onSubmit={handleSubmit}>
        <FormBody textValue={textValue} dateValue={dateValue} />

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

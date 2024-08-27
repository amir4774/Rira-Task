import { FormEvent } from "react";
import { Box, Button, TextField } from "@mui/material";
import useFormValue from "../hooks/useFormValue";
import { useGlobalContext } from "../GlobalContext";
import { GlobalContextType } from "../Interfaces";

const Form = () => {
  const { updateNotes, convertDate } = useGlobalContext() as GlobalContextType;
  const textValue = useFormValue("");
  const dateValue = useFormValue("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (!textValue.value || !dateValue.value) {
      alert("Please fill all the fields!");
      return;
    }

    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();

    const newNote = {
      text: textValue.value,
      submittedDate: convertDate({ year, month, day }),
      deadLine: dateValue.value,
    };

    updateNotes(newNote);
  };

  return (
    <Box width={{ xs: "95%", md: "60%" }} mx="auto" pt={3}>
      <form onSubmit={handleSubmit}>
        <TextField
          {...textValue}
          placeholder="Enter Note..."
          rows={5}
          fullWidth
          multiline
        />

        <input type="date" className="date-input" {...dateValue} />

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

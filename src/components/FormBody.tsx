import { TextField } from "@mui/material";
import { FormBodyPropsType } from "../Interfaces";

const FormBody = ({ textValue, dateValue }: FormBodyPropsType) => {
  return (
    <>
      <TextField
        {...textValue}
        placeholder="Enter Note..."
        rows={5}
        fullWidth
        multiline
      />

      <input type="date" className="date-input" {...dateValue} />
    </>
  );
};

export default FormBody;

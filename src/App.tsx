import { Box, CssBaseline } from "@mui/material";
import Form from "./components/Form";
import "./index.css";

const App = () => {
  return (
    <>
      <CssBaseline />

      <Box width={{ xs: "95%", md: "90%" }} mx="auto">
        <Form />
      </Box>
    </>
  );
};

export default App;

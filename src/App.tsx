import { Box, CssBaseline } from "@mui/material";
import Form from "./components/Form";
import Notes from "./components/Notes";
import GlobalProvider from "./GlobalContext";
import "./index.css";

const App = () => {
  return (
    <>
      <CssBaseline />
      <GlobalProvider>
        <Box width={{ xs: "95%", md: "90%" }} mx="auto">
          <Form />
          <Notes />
        </Box>
      </GlobalProvider>
    </>
  );
};

export default App;

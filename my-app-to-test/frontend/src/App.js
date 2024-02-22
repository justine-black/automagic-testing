import NewHeader, { Header } from "./Header";
import "./App.css";
import NewBody, { Body } from "./Body";
import { Box } from "@mui/material";

const App = () => {
  return (
    <Box className="new-app">
      <NewHeader />
      <NewBody />
    </Box>
  );
};

export default App;

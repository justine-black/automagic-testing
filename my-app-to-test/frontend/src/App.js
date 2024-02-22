import NewHeader from "./Header";
import "./App.css";
import NewBody from "./Body";
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

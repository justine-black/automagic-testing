import NewHeader from "./Header";
import "./App.css";
import NewBody from "./Body";
import { Box } from "@mui/material";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    document.title = "Automagic Test App";
  }, []);

  return (
    <Box className="new-app">
      <NewHeader />
      <NewBody />
    </Box>
  );
};

export default App;

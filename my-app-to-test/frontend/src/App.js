import Header, { NewHeader } from "./Header";
import "./App.css";
import Body, { NewBody } from "./Body";
import { Box } from "@mui/material";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const NewApp = () => {
  return (
    <Box className="new-app" sx={{ overflowY: "hidden" }}>
      <NewHeader />
      <NewBody />
    </Box>
  );
};

export default App;
export { NewApp };

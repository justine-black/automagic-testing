import Header, { NewHeader } from "./Header";
import "./App.css";
import Body, { NewBody } from "./Body";

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
    <div className="new-app">
      <NewHeader />
      <NewBody />
    </div>
  );
};

export { App };
export default NewApp;

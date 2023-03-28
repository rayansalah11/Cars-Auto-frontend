import "./App.css";
import { BrowserRouter as Router} from "react-router-dom";
import Header from "./components/common/Header";
const App = () => {
  return (
    <>
      <Router>
        <Header />
      </Router>
    </>
  );
};

export default App;

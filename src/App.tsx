import { BrowserRouter as Router } from "react-router-dom";
import RoutElements from "./routes";
import "./styles/global.scss";

function App() {
  return (
    <Router>
     <RoutElements/>
    </Router>
  );
}

export default App;

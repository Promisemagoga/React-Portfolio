import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Resume from "./Pages/Resume";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import Direction1 from "./Components/Direction1";
import Direction2 from "./Components/Direction2";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Resume" element={<Resume/>}></Route>
          <Route path="/Projects" element={<Projects/>}></Route>
          <Route path="/ContactMe" element={<Contact/>}></Route>
          <Route path="/Direction1" element={<Direction1/>}></Route>
          <Route path="/Direction2" element={<Direction2/>}></Route>



        </Routes>
      </Router>
    </div>
  );
}

export default App;

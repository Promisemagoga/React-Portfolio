import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import Resume from "./Components/Resume";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Direction1 from "./Components/Direction1";
import Direction2 from "./Components/Direction2";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <NavBar /> <Home /> <About /> <Footer />{" "}
              </div>
            }
          ></Route>
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

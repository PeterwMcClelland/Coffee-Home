
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import './App.css';

function App() {
  return (
    <>
    <BrowserRouter>
                <div className="navbar">
                    <div>
                        <NavLink to="/" style={({ isActive }) => ({ 
                            color: isActive ? 'lightblue' : 'beige' })}>
                            House Coffee
                        </NavLink>
                    </div>
                    <div></div>
                    <div className="navlink">
                        <NavLink to="/about" style={({ isActive }) => ({ 
                            color: isActive ? 'lightblue' : 'beige' })}>
                            About
                        </NavLink>
                        </div>
                </div>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/about" element={<About />} />
                </Routes>
            </BrowserRouter>
        </>
  );
}

export default App;

import "./styles.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Menu from "./Menu";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>

      <nav>
        <Link to="/">HOME</Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to="/menu/burritos">BURRITOS</Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to="/menu/tacos">TACOS</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu/:category" element={<Menu />} />
      </Routes>
    </div>
  );
}

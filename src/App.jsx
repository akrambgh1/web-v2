import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import {Akram }  from "../pages/profile-akram";


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Benghezal-akram" element={<Akram />} />

      </Routes>
    </Router>
  );
}

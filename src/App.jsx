import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import {Akram }  from "../pages/profile-akram";
import Contact from "../pages/Contact";


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Benghezal-akram" element={<Akram />} />

      </Routes>
    </Router>
  );
}

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ProfileAkram  from "../pages/profile-akram";


export default function App() {
  return (
    <Router basename="/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Benghezal-akram" element={<ProfileAkram />} />

      </Routes>
    </Router>
  );
}

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";

export default function App() {
  return (
    <Router basename="/">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import CakeDetails from "./CakeDetails";
import Cakes from "./Cakes";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cakes" element={<Cakes />} />
          <Route path="/cakes/:id" element={<CakeDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

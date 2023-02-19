import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./containers/Home";
import Navbar from "./components/Navbar";
import CakeDetails from "./components/CakeDetails/CakeDetails";
import Cakes from "./containers/Cakes";

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

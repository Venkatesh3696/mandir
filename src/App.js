import Epuja from "./pages/Epuja";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import PujaDetails from "./pages/PujaDetails";
import Cart from "./pages/Cart";
import Booking from "./pages/Booking";

function App() {
  return (
    <div className="min-h-screen overflow-auto px-10">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/epuja" element={<Epuja />} />
        <Route path="/epuja/:id" element={<PujaDetails />} />
        <Route path="/epuja/cart/:id" element={<Cart />} />
        <Route path="/epuja/sankalp/:id" element={<Booking />} />
      </Routes>
    </div>
  );
}

export default App;

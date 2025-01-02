import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import About_us from "./pages/About_Us";
import Home from "./pages/Home";
import Programs from "./pages/Programs";
import Contacts from "./pages/Contacts";

function App() {
  return (
    <div className="min-h-screen">
      {/* Place Navbar outside of Routes to make it general */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About_us />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/contacts" element={<Contacts/>} />
      </Routes>
    </div>
  );
}

export default App;

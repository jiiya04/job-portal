import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/home";
import Jobs from "./pages/jobs";
import Saved from "./pages/saved";

function App() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "bg-gray-900 text-white min-h-screen" : "bg-gray-100 min-h-screen"}>
      
      {/* NAVBAR */}
      <nav className="bg-blue-600 text-white p-4 flex justify-between">
        <h1 className="text-2xl font-bold">Job Portal</h1>

        <div className="space-x-4">
          <Link to="/">Home</Link>
          <Link to="/jobs">Jobs</Link>
          <Link to="/saved">Saved</Link>

          {/* DARK MODE BUTTON */}
          <button
            onClick={() => setDark(!dark)}
            className="bg-black px-2 py-1 rounded"
          >
            {dark ? "Light" : "Dark"}
          </button>
        </div>
      </nav>

      {/* CONTENT */}
      <div className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/saved" element={<Saved />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
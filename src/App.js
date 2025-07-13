import React, { useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Navbar1 from "./components/Navbar1";

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const toggleSidebar = () => setCollapsed(!collapsed);
  return (
    <HashRouter>
      <div className="d-flex">
        <Sidebar collapsed={collapsed} toggleSidebar={toggleSidebar} />
        <div
          className="flex-grow-1 p-3"
          style={{ background: "#f8f9fa", minHeight: "100vh" }}
        >
          <Navbar1 />
          <Routes>
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;

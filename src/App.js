import React, { useState } from "react";
import { HashRouter, Link, Route, Routes } from "react-router-dom";
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
          <div className="d-md-none bg-dark text-white p-2">
            <button
              className="btn btn-light"
              data-bs-toggle="collapse"
              data-bs-target="#mobileSidebar"
            >
              ☰
            </button>
          </div>

          <div className="collapse bg-dark text-white p-3" id="mobileSidebar">
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link className="nav-link text-white" to="/">
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/users">
                  Users
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/orders">
                  Orders
                </Link>
              </li>
            </ul>
          </div>
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

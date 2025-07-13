import React from "react";

function Navbar1() {
  return (
    
    <nav className="navbar navbar-expand navbr-light bg-white px-4 shadow-sm">
      <div className="d-flex align-items-center w-100 justify-content-between">
        <div className="d-flex align-items-center">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            style={{ width: "250px" }}
          />
        </div>
        <div className="d-flex align-items-center gap-3">
          <span className="position-relative">
            🔔
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              3
            </span>
          </span>
          <img
            src="https://i.pravatar.cc/40"
            alt="profile"
            className="rounded-circle"
            style={{ width: "40px", height: "40px" }}
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar1;

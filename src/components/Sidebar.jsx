import { Link } from "react-router-dom";
import "../css/Sidebar.css";

const Sidebar = ({ collapsed, toggleSidebar }) => {
  return (
    <div
      className={`sidebar bg-dark text-white p-3 d-none d-md-block`}
      style={{
        width: collapsed ? "80px" : "250px",
        height: "100vh",
        position: "sticky",
        top: 0,
        left: 0,
        overflowY: "auto",
        opacity: collapsed ? 1.5 : 3,
        // display: "inline-block",
        transition: "width 0.3s ease",
      }}
    >
      {/* Top part */}
      <div>
        <h4 className="mb-4 text-center">{collapsed ? "🧠" : "🧠 Admin"}</h4>
        <ul className="nav flex-column">
          <li className="nav-item mb-2">
            <Link className="nav-link text-white" to="/">
              📊 {collapsed ? "" : "Dashboard"}
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link className="nav-link text-white" to="/users">
              👥 {collapsed ? "" : "Users"}
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link className="nav-link text-white" to="/products">
              📦 {collapsed ? "" : "Products"}
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link className="nav-link text-white" to="/orders">
              🧾 {collapsed ? "" : "Orders"}
            </Link>
          </li>
        </ul>
      </div>

      {/* Collapse Button */}
      <div className="text-center">
        <button
          className="btn btn-outline-light btn-sm"
          onClick={toggleSidebar}
        >
          {collapsed ? "⏩" : "⏪"}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;

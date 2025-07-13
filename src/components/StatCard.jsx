import React from "react";

function StatCard({ title, value, bgColor, icon }) {
  return (
    <div
      className={`card text-white ${bgColor} shadow-sm`}
      style={{ minWidth: "220px" }}
    >
      <div className="card-body d-flex justify-content-between align-items-center">
        <div>
          <h6 className="card-title">{title}</h6>
          <h4 className="card-text">{value}</h4>
        </div>
        <div style={{ fontSize: "2rem" }}>{icon}</div>
      </div>
    </div>
  );
}

export default StatCard;

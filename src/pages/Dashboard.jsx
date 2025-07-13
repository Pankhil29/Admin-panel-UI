import React from "react";
import StatCard from "../components/StatCard";
import UsersTable from "../components/UsersTable";
import OrderTable from "../components/OrderTable";

function Dashboard() {
  return (
    <div>
      <h3 className="mb-4">Dashboard</h3>
      <div className="row g-4">
        <div className="col-md-3">
          <StatCard
            title="Total Users"
            value="1,230"
            bgColor="bg-primary"
            icon="👥"
          />
        </div>
        <div className="col-md-3">
          <StatCard title="Orders" value="320" bgColor="bg-success" icon="🧾" />
        </div>
        <div className="col-md-3">
          <StatCard
            title="Revenue"
            value="$92,000"
            bgColor="bg-warning"
            icon="💰"
          />
        </div>
        <div className="col-md-3">
          <StatCard title="Products" value="140" bgColor="bg-info" icon="📦" />
        </div>
      </div>
      <UsersTable />
      <OrderTable />
    </div>
  );
}

export default Dashboard;

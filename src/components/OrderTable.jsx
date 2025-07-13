import React from "react";

function OrderTable() {
  const orders = [
    {
      id: "#ORD101",
      product: "Wireless Mouse",
      amount: "₹599",
      status: "Delivered",
      date: "2024-07-01",
    },
    {
      id: "#ORD102",
      product: "Laptop",
      amount: "₹54,000",
      status: "Shipped",
      date: "2024-07-03",
    },
    {
      id: "#ORD103",
      product: "Keyboard",
      amount: "₹1,200",
      status: "Pending",
      date: "2024-07-05",
    },
    {
      id: "#ORD104",
      product: "Monitor",
      amount: "₹8,500",
      status: "Cancelled",
      date: "2024-07-06",
    },
  ];
  const getBadge = (status) => {
    switch (status) {
      case "Delivered":
        return "bg-success";
      case "Shipped":
        return "bg-info";
      case "Pending":
        return "bg-warning";
      case "Cancelled":
        return "bg-danger";
      default:
        return "bg-secondary";
    }
  };
  return (
    <div className="card mt-5 shadow-sm">
      <div className="card-header">
        <h5 className="mb-0">Recent Orders</h5>
      </div>
      <div className="card-body table-responsive">
        <table className="table table-hover align-middle">
          <thead className="table-light">
            <tr>
              <th>Order ID</th>
              <th>Product</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((o) => (
              <tr key={o.id}>
                <td> {o.id}</td>
                <td>{o.product}</td>
                <td>{o.amount}</td>

                <td>
                  <span className={`badge ${getBadge(o.status)}`}>
                    {o.status}
                  </span>
                </td>
                <td>{o.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OrderTable;

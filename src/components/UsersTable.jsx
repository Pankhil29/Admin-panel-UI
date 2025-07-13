import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

function UsersTable() {
  const users = [
    {
      id: 1,
      name: "Pankhil Patel",
      email: "pankhil@example.com",
      role: "Admin",
      status: "Active",
    },
    {
      id: 2,
      name: "John Doe",
      email: "john@example.com",
      role: "User",
      status: "Inactive",
    },
    {
      id: 3,
      name: "Jane Smith",
      email: "jane@example.com",
      role: "User",
      status: "Active",
    },
    {
      id: 4,
      name: "Alice Johnson",
      email: "alice@example.com",
      role: "User",
      status: "Active",
    },
  ];

  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  return (
    <div className="card mt-5 shadow-sm">
      <div className="card-header d-flex align-items-center justify-content-between">
        <h5 className="mb-0">Recent Users</h5>
        <Button className="btn btn-sm btn-primary" onClick={handleShow}>
          + Add User
        </Button>
      </div>

      <div className="card-body table-responsive">
        <table className="table table-hover align-middle">
          <thead className="table-light">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u, index) => (
              <tr key={u.id}>
                <td>{index + 1}</td>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>{u.role}</td>
                <td>
                  <span
                    className={`badge ${
                      u.status === "Active" ? "bg-success" : "bg-secondary"
                    }`}
                  >
                    {u.status}
                  </span>
                </td>
                <td>
                  <button className="btn btn-sm btn-primary me-2">Edit</button>
                  <button className="btn btn-sm btn-danger">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Name" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Role</Form.Label>
              <Form.Select>
                <option>User</option>
                <option>Admin</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Status</Form.Label>
              <Form.Select>
                <option>Active</option>
                <option>Inactive</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default UsersTable;

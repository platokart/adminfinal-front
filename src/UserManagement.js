import React, { useState } from 'react';

const UserManagement = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'Admin One', email: 'admin1@example.com', role: 'Super Admin' },
    { id: 2, name: 'Admin Two', email: 'admin2@example.com', role: 'Admin' },
  ]);

  const [newUser, setNewUser] = useState({ name: '', email: '', role: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleAddUser = () => {
    setUsers([...users, { ...newUser, id: users.length + 1 }]);
    setNewUser({ name: '', email: '', role: '' });
  };

  const handleEditUser = (id) => {
    console.log('Edit user with id:', id);
  };

  const handleDeleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="content-wrapper">
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0">User Management</h1>
            </div>
          </div>
        </div>
      </div>
      <section className="content">
        <div className="container-fluid">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Admin Users</h3>
            </div>
            <div className="card-body">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id}>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.role}</td>
                      <td>
                        <button className="btn btn-warning btn-sm" onClick={() => handleEditUser(user.id)}>
                          Edit
                        </button>
                        <button className="btn btn-danger btn-sm" onClick={() => handleDeleteUser(user.id)}>
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="card-footer">
              <h3 className="card-title">Add New User</h3>
              <div className="row">
                <div className="col-md-4">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Name"
                    value={newUser.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-md-4">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Email"
                    value={newUser.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-md-4">
                  <input
                    type="text"
                    name="role"
                    className="form-control"
                    placeholder="Role"
                    value={newUser.role}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-md-12 mt-2">
                  <button className="btn btn-primary" onClick={handleAddUser}>
                    Add User
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UserManagement;

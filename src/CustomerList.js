// ClientList.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CustomerList = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCustomers = async () => {
    try {
      const response = await fetch("http://localhost:5000/admin/customer");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setCustomers(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (customers.length === 0) {
    return <div>No customers found</div>;
  }

  return (
    <div className="content-wrapper">
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0">Customer List</h1>
            </div>
          </div>
        </div>
      </div>
      <section className="content">
        <div className="container-fluid">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Customer List</h3>
            </div>
            <div className="card-body">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Logo</th>
                    <th>Company Name</th>
                    <th>Contact Information</th>
                    <th>Industry</th>
                    <th>Project History</th>
                    <th>Job Level</th>
                    <th>Subscribed Plan</th>
                  </tr>
                </thead>
                <tbody>
                  {customers.map((customer, index) => (
                    <tr key={index}>
                      <td>
                        <Link to={`/customer-details/${customer._id}`}>
                          <img
                            src={customer.logo}
                            alt={`${customer.firstName} Logo`}
                            width="50"
                          />
                        </Link>
                      </td>
                      <td>{customer.firstName}</td>
                      <td>{customer.contact}</td>
                      <td>{customer.industry}</td>
                      <td>{customer.projectHistory}</td>
                      <td>{customer.jobLevel}</td>
                      <td>{customer.subscribedPlan}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomerList;

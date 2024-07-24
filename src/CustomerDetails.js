// ClientDetails.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const CustomerDetails = () => {
  const { customerId } = useParams();
  const [customer, setCustomer] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCustomerDetails = async () => {
      try {
        console.log(`Fetching details for customerId: ${customerId}`);
        const response = await fetch(
          `http://localhost:5000/admin/customer/${customerId}`,
          {
            method: "POST", // Changed to GET method
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log(`Response status: ${response.status}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log("Fetched data:", data);
        setCustomer(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching customer details:", error);
        setLoading(false);
      }
    };

    fetchCustomerDetails();
  }, [customerId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomer((prevCustomer) => ({
      ...prevCustomer,
      [name]: value,
    }));
  };

  const handleContactChange = (e, department) => {
    const { value } = e.target;
    setCustomer((prevCustomer) => ({
      ...prevCustomer,
      contactInfo: {
        ...prevCustomer.contactInfo,
        [department]: value,
      },
    }));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!customer) {
    return <div>No customer details available</div>;
  }

  return (
    <div className="content-wrapper">
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0">Customer Details</h1>
            </div>
          </div>
        </div>
      </div>
      <section className="content">
        <div className="container-fluid">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Customer Details</h3>
            </div>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label htmlFor="firstName">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    name="firstName"
                    value={customer.firstName || ""}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    name="email"
                    value={customer.email || ""}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Contact</label>
                  <input
                    type="text"
                    className="form-control"
                    id="contact"
                    name="contact"
                    value={customer.contact || ""}
                    onChange={handleChange}
                  />
                </div>
              </form>
            </div>

            <div className="card-header">
              <h3 className="card-title">Company Details</h3>
            </div>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label htmlFor="companyName">Company Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="companyName"
                    name="companyName"
                    value={customer.companyName || ""}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="industry">Industry</label>
                  <input
                    type="text"
                    className="form-control"
                    id="industry"
                    name="industry"
                    value={customer.industry || ""}
                    onChange={handleChange}
                  />
                </div>
              </form>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Contact Information</h3>
            </div>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label htmlFor="billing">Billing</label>
                  <input
                    type="email"
                    className="form-control"
                    id="billing"
                    value={customer.contactInfo?.billing || ""}
                    onChange={(e) => handleContactChange(e, "billing")}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="projectManagement">Project Management</label>
                  <input
                    type="email"
                    className="form-control"
                    id="projectManagement"
                    value={customer.contactInfo?.projectManagement || ""}
                    onChange={(e) =>
                      handleContactChange(e, "projectManagement")
                    }
                  />
                </div>
              </form>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Subscription and Billing Details</h3>
            </div>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label htmlFor="subscription">Subscription</label>
                  <input
                    type="text"
                    className="form-control"
                    id="subscription"
                    name="subscription"
                    value={customer.subscription || ""}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="billingDetails">Billing Details</label>
                  <input
                    type="text"
                    className="form-control"
                    id="billingDetails"
                    name="billingDetails"
                    value={customer.billingDetails || ""}
                    onChange={handleChange}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomerDetails;

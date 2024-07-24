import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ConsultantDetails = () => {
  const { consultantId } = useParams();
  const [consultant, setConsultant] = useState(null);
  const [loading, setLoading] = useState(true);
  const [feePerSession, setFeePerSession] = useState("");

  useEffect(() => {
    const fetchConsultantDetails = async () => {
      try {
        console.log(`Fetching details for consultantId: ${consultantId}`);
        const response = await fetch(
          `http://localhost:5000/admin/approvedConsultant/${consultantId}`,
          {
            method: "GET",
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
        setConsultant(data);
        if (data.additionalDetails && data.additionalDetails.length > 0) {
          setFeePerSession(data.additionalDetails[0].feePerSession);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching consultant details:", error);
        setLoading(false);
      }
    };

    fetchConsultantDetails();
  }, [consultantId]);

  const handleSuspendAccount = () => {
    alert("Account suspended");
  };

  const handleDeactivateAccount = () => {
    alert("Account deactivated");
  };

  const handleSave = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/admin/approvedConsultant/${consultantId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ feePerSession }),
        }
      );
      const data = await response.json();
      if (response.ok) {
        alert("Consultant details updated successfully");
      } else {
        alert("Error updating consultant details: " + data.message);
      }
    } catch (error) {
      console.error("Error updating consultant details:", error);
      alert("Error updating consultant details: " + error.message);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!consultant) {
    return <div>Consultant not found</div>;
  }

  const basicDetails = consultant.basicdetails && consultant.basicdetails[0];
  const additionalDetails =
    consultant.additionaldetails && consultant.additionaldetails[0];

  return (
    <div className="content-wrapper">
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0">Consultant Details</h1>
            </div>
          </div>
        </div>
      </div>

      <section className="content">
        <div className="container-fluid">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Consultant Profile Information</h3>
            </div>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={consultant.email}
                    readOnly
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Username</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={basicDetails?.firstName || ""}
                    readOnly
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Email address</label>
                  <input
                    type="text"
                    className="form-control"
                    id="phone"
                    value={consultant.email}
                    readOnly
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="expertise">Designation</label>
                  <input
                    type="text"
                    className="form-control"
                    id="expertise"
                    value={basicDetails?.designation || ""}
                    readOnly
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="feePerSession">Fee Per Session</label>
                  <input
                    type="text"
                    className="form-control"
                    id="feePerSession"
                    value={feePerSession}
                    onChange={(e) => setFeePerSession(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="industryExperience">
                    Industry Experience
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="industryExperience"
                    value={basicDetails?.industry.join(", ") || ""}
                    readOnly
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="bio">Bio</label>
                  <textarea
                    className="form-control"
                    id="bio"
                    value={additionalDetails?.aboutYourself || ""}
                    readOnly
                  />
                </div>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleSave}
                >
                  Save
                </button>
              </form>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Suspend or Deactivate Account</h3>
            </div>
            <div className="card-body">
              <button
                className="btn btn-danger mr-2"
                onClick={handleSuspendAccount}
              >
                Suspend
              </button>
              <button
                className="btn btn-warning"
                onClick={handleDeactivateAccount}
              >
                Deactivate
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConsultantDetails;

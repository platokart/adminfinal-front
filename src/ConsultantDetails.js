import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ConsultantDetails = () => {
  const { consultantId } = useParams();
  const [consultant, setConsultant] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchConsultantDetails = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/admin/UnapprovedConsultant/${consultantId}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setConsultant(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching consultant details:", error);
        setLoading(false);
      }
    };

    fetchConsultantDetails();
  }, [consultantId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!consultant) {
    return <div>Consultant not found</div>;
  }

  const basicDetails = consultant.basicdetails && consultant.basicdetails[0];
  const additionalDetails =
    consultant.additionalDetails && consultant.additionalDetails[0];
  const criticalDetails =
    consultant.criticalDetails && consultant.criticalDetails[0];
  const paymentDetails =
    consultant.paymentDetails && consultant.paymentDetails[0];

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
                  <label htmlFor="email">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    value={basicDetails?.firstName || ""}
                    readOnly
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    value={consultant.email}
                    readOnly
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="designation">Designation</label>
                  <input
                    type="text"
                    className="form-control"
                    id="designation"
                    value={basicDetails?.designation || ""}
                    readOnly
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="industry">Industry</label>
                  <input
                    type="text"
                    className="form-control"
                    id="industry"
                    value={basicDetails?.industry.join(", ") || ""}
                    readOnly
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="orgName">Organization Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="orgName"
                    value={basicDetails?.orgName || ""}
                    readOnly
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="functionName">Function Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="functionName"
                    value={basicDetails?.functionName || ""}
                    readOnly
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="skills">Skills</label>
                  <input
                    type="text"
                    className="form-control"
                    id="skills"
                    value={basicDetails?.skills.join(", ") || ""}
                    readOnly
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="experience">Years of Experience</label>
                  <input
                    type="text"
                    className="form-control"
                    id="experience"
                    value={basicDetails?.yearsOfExperience || ""}
                    readOnly
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="education">Highest Education</label>
                  <input
                    type="text"
                    className="form-control"
                    id="education"
                    value={basicDetails?.highestEducation || ""}
                    readOnly
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="passingYear">Year of Passing</label>
                  <input
                    type="text"
                    className="form-control"
                    id="passingYear"
                    value={basicDetails?.yearOfPassing || ""}
                    readOnly
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="institute">Institute Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="institute"
                    value={basicDetails?.instituteName || ""}
                    readOnly
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="photo">Photo</label>
                  <input
                    type="text"
                    className="form-control"
                    id="photo"
                    value={basicDetails?.photo || ""}
                    readOnly
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="aboutYourself">Bio</label>
                  <textarea
                    className="form-control"
                    id="aboutYourself"
                    value={additionalDetails?.aboutYourself || ""}
                    readOnly
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="linkedin">LinkedIn Profile</label>
                  <input
                    type="text"
                    className="form-control"
                    id="linkedin"
                    value={additionalDetails?.linkedinProfile || ""}
                    readOnly
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="fee">Fee per Session</label>
                  <input
                    type="text"
                    className="form-control"
                    id="fee"
                    value={additionalDetails?.feePerSession || ""}
                    readOnly
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="ctc">Last CTC</label>
                  <input
                    type="text"
                    className="form-control"
                    id="ctc"
                    value={additionalDetails?.lastCTC || ""}
                    readOnly
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="availability">Availability</label>
                  <input
                    type="text"
                    className="form-control"
                    id="availability"
                    value={
                      criticalDetails?.makeYourAvailability.join(", ") || ""
                    }
                    readOnly
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="timeAvailability">Time Availability</label>
                  <input
                    type="text"
                    className="form-control"
                    id="timeAvailability"
                    value={criticalDetails?.provideTimeAvailability || ""}
                    readOnly
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="bankAccount">Bank Account Number</label>
                  <input
                    type="text"
                    className="form-control"
                    id="bankAccount"
                    value={paymentDetails?.bankAccountNumber || ""}
                    readOnly
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="ifsc">IFSC Code</label>
                  <input
                    type="text"
                    className="form-control"
                    id="ifsc"
                    value={paymentDetails?.ifscCode || ""}
                    readOnly
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="bankName">Bank Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="bankName"
                    value={paymentDetails?.bankName || ""}
                    readOnly
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="bankBranch">Bank Branch</label>
                  <input
                    type="text"
                    className="form-control"
                    id="bankBranch"
                    value={paymentDetails?.bankBranch || ""}
                    readOnly
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="pan">PAN Number</label>
                  <input
                    type="text"
                    className="form-control"
                    id="pan"
                    value={paymentDetails?.panNumber || ""}
                    readOnly
                  />
                </div>
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
                onClick={() => alert("Account suspended")}
              >
                Suspend
              </button>
              <button
                className="btn btn-warning"
                onClick={() => alert("Account deactivated")}
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

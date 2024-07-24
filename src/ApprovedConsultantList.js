import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ApprovedConsultantList = () => {
  const [consultants, setConsultants] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchApprovedConsultants = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/admin/approvedConsultant/"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setConsultants(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchApprovedConsultants();
  }, []);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleEdit = (id) => {
    console.log("Edit consultant with id:", id);
  };

  return (
    <div className="content-wrapper">
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0">Approved Consultant List</h1>
            </div>
            <div className="col-sm-6"></div>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="container-fluid">
          <div className="card">
            <div className="card-body">
              <table className="table table-bordered table-hover">
                <thead>
                  <tr>
                    <th>Profile Picture</th>
                    <th>Name</th>
                    <th>Title</th>
                    <th>Company</th>
                    <th>Hourly Rate</th>
                    <th>Availability</th>
                    <th>Rating</th>
                  </tr>
                </thead>
                <tbody>
                  {consultants.map((consultant) => (
                    <tr key={consultant._id}>
                      <td>
                        <Link
                          to={`/consultant-details/approved/${consultant._id}`}
                        >
                          <img
                            src={consultant.basicdetails[0]?.photo}
                            alt="Profile"
                            style={{ width: "50px", height: "50px" }}
                          />
                        </Link>
                      </td>
                      <td>{consultant.basicdetails[0]?.firstName}</td>
                      <td>{consultant.basicdetails[0]?.designation}</td>
                      <td>{consultant.basicdetails[0]?.orgName}</td>
                      <td>${consultant.additionalDetails[0]?.feePerSession}</td>
                      <td>
                        <div className="availability">
                          {consultant.data?.availability?.map((slot) => (
                            <span
                              key={slot.date}
                              className={`slot ${
                                slot.available ? "available" : "unavailable"
                              }`}
                            >
                              {slot.date}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td>{consultant.data?.rating}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="card-footer clearfix">
              <ul className="pagination pagination-sm m-0 float-right">
                <li
                  className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
                >
                  <button
                    className="page-link"
                    onClick={() => handlePageChange(currentPage - 1)}
                  >
                    Previous
                  </button>
                </li>
                <li className="page-item">
                  <button
                    className="page-link"
                    onClick={() => handlePageChange(1)}
                  >
                    1
                  </button>
                </li>
                <li className="page-item">
                  <button
                    className="page-link"
                    onClick={() => handlePageChange(2)}
                  >
                    2
                  </button>
                </li>
                <li className="page-item">
                  <button
                    className="page-link"
                    onClick={() => handlePageChange(currentPage + 1)}
                  >
                    Next
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApprovedConsultantList;

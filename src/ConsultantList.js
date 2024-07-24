import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ConsultantList = () => {
  const [consultants, setConsultants] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchUnapprovedConsultants = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/admin/UnapprovedConsultant"
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
    fetchUnapprovedConsultants();
  }, []);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleRemove = (id) => {
    setConsultants(consultants.filter((consultant) => consultant._id !== id));
  };

  const handleToggleAllow = async (id) => {
    try {
      await fetch(
        `http://localhost:5000/admin/UnapprovedConsultant/allow/${id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      fetchUnapprovedConsultants();
    } catch (error) {
      console.error("Error updating consultant status:", error);
    }
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
              <h1 className="m-0">Unapproved consultants List</h1>
            </div>
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
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {consultants.map((consultant) => (
                    <tr key={consultant._id}>
                      <td>
                        <Link
                          to={`/consultant-details/unapproved/${consultant._id}`}
                        >
                          <img
                            src={
                              consultant.basicdetails[0]?.photo ||
                              "default_image_url"
                            }
                            alt="Profile"
                            style={{ width: "50px", height: "50px" }}
                          />
                        </Link>
                      </td>
                      <td>{consultant.basicdetails[0]?.firstName}</td>
                      <td>{consultant.basicdetails[0]?.designation}</td>
                      <td>{consultant.basicdetails[0]?.orgName}</td>
                      <td>
                        <div className="btn-group" role="group">
                          <button
                            className="btn btn-warning btn-sm"
                            onClick={() => handleEdit(consultant._id)}
                          >
                            Edit
                          </button>
                          <button
                            className="btn btn-danger btn-sm"
                            onClick={() => handleRemove(consultant._id)}
                          >
                            Remove
                          </button>
                          <button
                            className="btn btn-success btn-sm"
                            onClick={() => handleToggleAllow(consultant._id)}
                          >
                            Approve
                          </button>
                        </div>
                      </td>
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

export default ConsultantList;

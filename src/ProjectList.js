// ClientList.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const ProjectsList = () => {
  // Sample data for clients
  const [projects, setProjects] = useState([
    {
      clientName : "John Doe",
      projectName : "vfsfiwefwawee",
      industry : 'Finance',
      status : 'Ongoing', //ongoing or completed
      consultantAssigned : 'JohnDoe',  //yes or no
      startDate : '06-06-2024',
      endDate : '07-06-2024',
    },
    {
      clientName : "John Doe",
      projectName : "vfsfiwefwawee",
      industry : 'Finance',
      status : 'Ongoing', //ongoing or completed
      consultantAssigned : 'John Doe',  //yes or no
      startDate : '06-06-2024',
      endDate : '07-06-2024',
    },
    // Add more client data as needed
  ]);

  // State for filter values
  const [filters, setFilters] = useState({
    projectName: '',
    clientName: '',
    industry : '',
    assignedConsultant: '',
    projectStatus: '',
    startDate : '',
    endDate : '',
  });

  // Handle filter change
  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  // Filtered clients based on the filters
  const filteredProjects = projects.filter(project => { 
    return (
      (filters.projectName === '' || project.projectName.toLowerCase().includes(filters.projectName.toLowerCase())) &&
      (filters.clientName === '' || project.clientName.toLowerCase().includes(filters.clientName.toLowerCase())) &&
      (filters.industry === '' || project.industry === filters.industry) &&
      (filters.assignedConsultant === '' || project.consultantAssigned.toLowerCase().includes(filters.assignedConsultant.toLowerCase())) &&
      (filters.projectStatus === '' || project.status === filters.projectStatus) &&
      (filters.startDate === '' || new Date(project.startDate) >= new Date(filters.startDate)) &&
      (filters.endDate === '' || new Date(project.endDate) <= new Date(filters.endDate))
    );
  });

  

  return (
    <div className="content-wrapper">
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0">Project List</h1>
            </div>
          </div>
        </div>
      </div>
      <section className="content">
        <div className="container-fluid">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Filters</h3>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-3">
                  <div className="form-group">
                    <label htmlFor="projecName">Project Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="projecName"
                      name="projectName"
                      value={filters.projectName}
                      onChange={handleFilterChange}
                    />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="form-group">
                    <label htmlFor="clientName">Client Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="clientName"
                      name="clientName"
                      value={filters.clientName}
                      onChange={handleFilterChange}
                    />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="form-group">
                    <label htmlFor="assignedConsultant">Assigned Consultant</label>
                    <input
                      type="text"
                      className="form-control"
                      id="assignedConsultant"
                      name="assignedConsultant"
                      value={filters.assignedConsultant}
                      onChange={handleFilterChange}
                    />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="form-group">
                    <label htmlFor="projectStatus">Project Status</label>
                    <select
                      className="form-control"
                      id="projectStatus"
                      name="projectStatus"
                      value={filters.projectStatus}
                      onChange={handleFilterChange}
                    >
                      <option value="">Select</option>
                      <option value="Ongoing">Ongoing</option>
                      <option value="Completed">Completed</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="form-group">
                    <label htmlFor="industry">Industry</label>
                    <select
                      className="form-control"
                      id="industry"
                      name="industry"
                      value={filters.industry}
                      onChange={handleFilterChange}
                    >
                      <option value="">All</option>
                      <option value="Technology">Technology</option>
                      <option value="Finance">Finance</option>
                      <option value="Healthcare">Healthcare</option>
                      <option value="Education">Education</option>
                      <option value="Retail">Retail</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="form-group">
                    <label htmlFor="startDate">Start Date</label>
                    <input
                      type="date"
                      className="form-control"
                      id="startDate"
                      name="startDate"
                      value={filters.startDate}
                      onChange={handleFilterChange}
                    />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="form-group">
                    <label htmlFor="endDate">End Date</label>
                    <input
                      type="date"
                      className="form-control"
                      id="endDate"
                      name="endDate"
                      value={filters.endDate}
                      onChange={handleFilterChange}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Projects List</h3>
            </div>
            <div className="card-body">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Project Title</th>
                    <th>Client Name</th>
                    <th>Industry</th>
                    <th>Assigned Consultant</th>
                    <th>Project Status</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredProjects.map((project, index) => (
                      <tr key={index}>
                      <td><Link to={`/project-details/${project.projectName}`}>{project.projectName}</Link></td>
                      <td>{project.clientName}</td>
                      <td>{project.industry}</td>
                      <td>{project.consultantAssigned}</td>
                      <td>{project.status}</td>
                      <td>{project.startDate}</td>
                      <td>{project.endDate}</td>
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

export default ProjectsList;

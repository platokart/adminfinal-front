import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      <Link to="/" className="brand-link">
        <span className="brand-text font-weight-light">Admin Panel</span>
      </Link>
      <div className="sidebar">
        <nav className="mt-2">
          {/* Main Menu */}
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            {/* Dashboard */}
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <i className="nav-icon fas fa-tachometer-alt"></i>
                <p>Dashboard</p>
              </Link>
            </li>
            {/* Consultant List */}
            <li className="nav-item">
              <Link to="/consultant-list" className="nav-link">
                <i className="nav-icon fas fa-users"></i>
                <p>Unapproved Consultants List</p>
              </Link>
            </li>
            {/*Approved Consultant List */}
            <li className="nav-item">
              <Link to="/approved-consultant-list" className="nav-link">
                <i className="nav-icon fas fa-users"></i>
                <p>Approved Consultant List</p>
              </Link>
            </li>
            {/* Add Consultant */}
            <li className="nav-item">
              <Link to="/add-consultant" className="nav-link">
                <i className="nav-icon fas fa-user-plus"></i>
                <p>Add Consultant</p>
              </Link>
            </li>
            {/* Consultant Details 
            <li className="nav-item">
              <Link to="/consultant-details" className="nav-link">
                <i className="nav-icon fas fa-user"></i>
                <p>Consultant Details</p>
              </Link>
            </li>*/}
            {/* Client List */}
            <li className="nav-item">
              <Link to="/customer-list" className="nav-link">
                <i className="nav-icon fas fa-building"></i>
                <p>Customer List</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/upload-Article" className="nav-link">
                <i className="nav-icon fas fa-building"></i>
                <p>Upload Article</p>
              </Link>
            </li>
            {/* Client Details 
            <li className="nav-item">
              <Link to="/client-details" className="nav-link">
                <i className="nav-icon fas fa-building"></i>
                <p>Client Details</p>
              </Link>
            </li>
            {/** Project List 
            <li className="nav-item">
              <Link to="/projects-list" className="nav-link">
                <i className="nav-icon fas fa-building"></i>
                <p>Projects List</p>
              </Link>
            </li>
            {/** Project Details 
            <li className="nav-item">
              <Link to="/project-details" className="nav-link">
                <i className="nav-icon fas fa-building"></i>
                <p>Projects Details</p>
              </Link>
            </li>
            {/* User Management 
            <li className="nav-item">
              <Link to="/user-management" className="nav-link">
                <i className="nav-icon fas fa-user-shield"></i>
                <p>User Management</p>
              </Link>
            </li>
            {/* Billing 
            <li className="nav-item">
              <Link to="/billing" className="nav-link">
                <i className="nav-icon fas fa-money-check-alt"></i>
                <p>Billing</p>
              </Link>
            </li>
            {/* Reporting 
            <li className="nav-item">
              <Link to="/reporting" className="nav-link">
                <i className="nav-icon fas fa-chart-bar"></i>
                <p>Reporting</p>
              </Link>
            </li>
            {/* Platform Management 
            <li className="nav-item">
              <Link to="/platform-management" className="nav-link">
                <i className="nav-icon fas fa-cogs"></i>
                <p>Platform Management</p>
              </Link>
            </li>*/}
          </ul>

          {/* Additional items */}
          <ul className="nav nav-pills nav-sidebar flex-column mt-4">
            {/* Search Bar */}
            <li className="nav-item">
              <form className="nav-link">
                <div className="input-group">
                  <input
                    type="search"
                    className="form-control"
                    placeholder="Search..."
                    aria-label="Search"
                  />
                  <div className="input-group-append">
                    <button type="submit" className="btn btn-primary">
                      <i className="fas fa-search"></i>
                    </button>
                  </div>
                </div>
              </form>
            </li>
            {/* Notifications */}
            <li className="nav-item">
              <Link to="/notifications" className="nav-link">
                <i className="nav-icon fas fa-bell"></i>
                <p>Notifications</p>
              </Link>
            </li>
            {/* Help & Support */}
            <li className="nav-item">
              <Link to="/help-support" className="nav-link">
                <i className="nav-icon fas fa-question-circle"></i>
                <p>Help & Support</p>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;

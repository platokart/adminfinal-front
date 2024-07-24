import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import ConsultantList from "./ConsultantList";
import ConsultantDetails from "./ConsultantDetails";
import ApprovedConsultantDetails from "./ApprovedConsultantDetails";
import AddConsultant from "./AddConsultant";
import CustomerList from "./CustomerList";
import CustomerDetails from "./CustomerDetails";
import UserManagement from "./UserManagement";
import Billing from "./Billing";
import Reporting from "./Reporting";
import PlatformManagement from "./PlatformManagement";
import Notifications from "./Notifications";
import HelpSupport from "./HelpSupport";
import ProjectsList from "./ProjectList";
import ProjectDetails from "./ProjectDetails";
import ApprovedConsultantList from "./ApprovedConsultantList";
import UploadArticle from "./uploadArticle";

const App = () => {
  return (
    <Router>
      <div className="wrapper">
        <Sidebar />
        <div className="content-wrapper">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/consultant-list" element={<ConsultantList />} />
            <Route
              path="/approved-consultant-list"
              element={<ApprovedConsultantList />}
            />
            <Route
              path="/consultant-details/unapproved/:consultantId"
              element={<ConsultantDetails />}
            />
            <Route
              path="/consultant-details/approved/:consultantId"
              element={<ApprovedConsultantDetails />}
            />
            <Route path="/add-consultant" element={<AddConsultant />} />
            <Route path="/customer-list" element={<CustomerList />} />
            <Route
              path="/customer-details/:customerId"
              element={<CustomerDetails />}
            />
            <Route path="/upload-Article" element={<UploadArticle />} />
            <Route path="/projects-list" element={<ProjectsList />} />
            <Route path="/project-details" element={<ProjectDetails />} />
            <Route path="/user-management" element={<UserManagement />} />
            <Route path="/billing" element={<Billing />} />
            <Route path="/reporting" element={<Reporting />} />
            <Route
              path="/platform-management"
              element={<PlatformManagement />}
            />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/help-support" element={<HelpSupport />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;

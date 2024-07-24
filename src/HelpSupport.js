import React from 'react';
import { Link } from 'react-router-dom';

const HelpSupport = () => {
  return (
    <div className="content-wrapper">
      <section className="content">
        <div className="container-fluid">
          {/* Page Header */}
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Help & Support</h1>
            </div>
          </div>

          {/* FAQs */}
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Frequently Asked Questions</h3>
            </div>
            <div className="card-body">
              {/* List of FAQs */}
              <ul>
                <li>Question 1: Answer to question 1</li>
                <li>Question 2: Answer to question 2</li>
                {/* Add more FAQs as needed */}
              </ul>
            </div>
          </div>

          {/* User Guides */}
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">User Guides</h3>
            </div>
            <div className="card-body">
              {/* List of User Guides */}
              <ul>
                <li><Link to="/user-guide-1">User Guide 1</Link></li>
                <li><Link to="/user-guide-2">User Guide 2</Link></li>
                {/* Add more user guides as needed */}
              </ul>
            </div>
          </div>

          {/* Support Button */}
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Need Further Assistance?</h3>
                </div>
                <div className="card-body">
                  <p>If you have any further questions or issues, please feel free to contact our support team.</p>
                  <Link to="/contact-support" className="btn btn-primary">Contact Support</Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default HelpSupport;

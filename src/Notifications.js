import React from 'react';

const Notifications = () => {
  return (
    <div className="content-wrapper">
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0">Notifications</h1>
            </div>
          </div>
        </div>
      </div>
      
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-body">
                  {/* New Applications */}
                  <div className="alert alert-info" role="alert">
                    New application received!
                  </div>
                  {/* Project Updates */}
                  <div className="alert alert-success" role="alert">
                    Project update: Project X completed successfully.
                  </div>
                  {/* Client Messages */}
                  <div className="alert alert-warning" role="alert">
                    Client message: Urgent request for project revision.
                  </div>
                  {/* Upcoming Consultant Availability Changes */}
                  <div className="alert alert-primary" role="alert">
                    Upcoming consultant availability change: John Doe will be unavailable on 2024-06-05.
                  </div>
                  {/* Add more notifications as needed */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Notifications;

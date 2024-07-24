import React, { useState } from 'react';

const Reporting = () => {
  const [reportType, setReportType] = useState('Consultant Activity');

  const handleReportTypeChange = (type) => {
    setReportType(type);
  };

  return (
    <div className="content-wrapper">
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0">Reporting</h1>
            </div>
            <div className="col-sm-6">
              {/* Report Type Selector */}
              <div className="btn-group float-right">
                <button type="button" className={`btn btn-${reportType === 'Consultant Activity' ? 'primary' : 'outline-primary'}`} onClick={() => handleReportTypeChange('Consultant Activity')}>Consultant Activity</button>
                <button type="button" className={`btn btn-${reportType === 'Client Engagement' ? 'primary' : 'outline-primary'}`} onClick={() => handleReportTypeChange('Client Engagement')}>Client Engagement</button>
                <button type="button" className={`btn btn-${reportType === 'Platform Performance' ? 'primary' : 'outline-primary'}`} onClick={() => handleReportTypeChange('Platform Performance')}>Platform Performance</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="content">
        <div className="container-fluid">
          {/* Generate and Export Reports */}
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Generate and Export Reports</h3>
            </div>
            <div className="card-body">
              {/* Include buttons to generate and export reports */}
              <button className="btn btn-primary">Generate Report</button>
              <button className="btn btn-secondary ml-2">Export as CSV</button>
              <button className="btn btn-secondary ml-2">Export as PDF</button>
            </div>
          </div>

          {/* Consultant Activity Report */}
          {reportType === 'Consultant Activity' && (
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Consultant Activity Report</h3>
              </div>
              <div className="card-body">
                <p>Include charts and graphs for consultant activity</p>
              </div>
            </div>
          )}

          {/* Client Engagement Report */}
          {reportType === 'Client Engagement' && (
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Client Engagement Report</h3>
              </div>
              <div className="card-body">
                <p>Include charts and graphs for client engagement</p>
              </div>
            </div>
          )}

          {/* Platform Performance Report */}
          {reportType === 'Platform Performance' && (
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Platform Performance Report</h3>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6">
                    {/* Chart for project success rates */}
                    <div className="chart">
                      <p>Chart for project success rates</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    {/* Chart for consultant applications */}
                    <div className="chart">
                      <p>Chart for consultant applications</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </section>
    </div>
  );
};

export default Reporting;

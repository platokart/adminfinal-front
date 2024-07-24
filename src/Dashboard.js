import React, { useState, useEffect } from "react";

const Dashboard = () => {
  const [topIndustriesData, setTopIndustriesData] = useState([]);
  const [consultantExpertiseData, setConsultantExpertiseData] = useState([]);
  const [totalCustomers, setTotalCustomers] = useState(0);
  const [totalConsultants, setTotalConsultants] = useState(0);
  const [totalRevenue, setTotalRevenue] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseIndustries = await fetch(
          "http://localhost:5000/admin/dashboard/top-industries"
        );
        const industriesData = await responseIndustries.json();
        setTopIndustriesData(industriesData.data);

        const responseExpertise = await fetch(
          "http://localhost:5000/admin/dashboard/consultant-expertise"
        );
        const expertiseData = await responseExpertise.json();
        setConsultantExpertiseData(expertiseData.data);

        const responseTotalCustomers = await fetch(
          "http://localhost:5000/admin/dashboard/totalcustomers"
        );
        const totalCustomersData = await responseTotalCustomers.json();
        setTotalCustomers(totalCustomersData.totalCustomers);

        const responseTotalConsultants = await fetch(
          "http://localhost:5000/admin/dashboard/totalconsultants"
        );
        const totalConsultantsData = await responseTotalConsultants.json();
        setTotalConsultants(totalConsultantsData.totalConsultants);

        const responseTotalRevenue = await fetch(
          "http://localhost:5000/admin/dashboard/total-revenue"
        );
        const totalRevenueData = await responseTotalRevenue.json();
        setTotalRevenue(totalRevenueData.totalRevenue);

        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Sample data for key metrics
  const keyMetricsData = [
    { label: "Total Customers", value: totalCustomers },
    { label: "Total Consultants", value: totalConsultants },
    { label: "Total Revenue", value: `$${totalRevenue.toFixed(2)}` },
  ];

  // Sample data for quick links
  const quickLinks = [
    { label: "Manage New Applications", link: "#" },
    { label: "Manage Ongoing Projects", link: "#" },
    { label: "View Reports", link: "#" },
  ];

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="content-wrapper" style={{ marginLeft: "40px" }}>
      {/* Content Header (Page header) */}
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0">Dashboard</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            {/* Key Metrics Cards */}
            {keyMetricsData.map((item, index) => (
              <div key={index} className="col-lg-3 col-6">
                <div className="small-box bg-info">
                  <div className="inner">
                    <h3>{item.value}</h3>
                    <p>{item.label}</p>
                  </div>
                  <div className="icon">
                    <i className="ion ion-bag"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Graphical Representation - Top Industries */}
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Top Industries</h3>
                </div>
                <div className="card-body">
                  <ul className="list-unstyled">
                    {topIndustriesData.map((item, index) => (
                      <li key={index} className="progress-group">
                        {item._id}
                        <span className="float-right">
                          <b>{item.count}</b>/100
                        </span>
                        <div className="progress progress-sm">
                          <div
                            className="progress-bar bg-primary"
                            style={{ width: `${item.count}%` }}
                          ></div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Graphical Representation - Consultant Expertise */}
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Consultant Expertise</h3>
                </div>
                <div className="card-body">
                  <ul className="list-unstyled">
                    {consultantExpertiseData.map((item, index) => (
                      <li key={index} className="progress-group">
                        {item._id}
                        <span className="float-right">
                          <b>{item.count}</b>/100
                        </span>
                        <div className="progress progress-sm">
                          <div
                            className="progress-bar bg-success"
                            style={{ width: `${item.count}%` }}
                          ></div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Quick Links</h3>
                </div>
                <div className="card-body">
                  <ul className="list-unstyled">
                    {quickLinks.map((item, index) => (
                      <li key={index}>
                        <a href={item.link}>{item.label}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;

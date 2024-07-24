import React from "react";

const Billing = () => {
  const mockConsultantPayouts = [
    {
      id: 1,
      name: "John Doe",
      method: "PayPal",
      schedule: "Biweekly",
      balance: "$500",
    },
    {
      id: 2,
      name: "Jane Smith",
      method: "Bank Transfer",
      schedule: "Monthly",
      balance: "$700",
    },
  ];

  const mockClientInvoices = [
    { id: 1, client: "Client A", amount: "$1000", status: "Paid" },
    { id: 2, client: "Client B", amount: "$1500", status: "Pending" },
  ];

  const handleSetupPaymentIntegration = () => {
    console.log("Setting up payment integration");
  };

  return (
    <div className="content-wrapper">
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0">Billing</h1>
            </div>
          </div>
        </div>
      </div>

      <section className="content">
        <div className="container-fluid">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Consultant Payouts</h3>
            </div>
            <div className="card-body">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Payout Method</th>
                    <th>Payout Schedule</th>
                    <th>Balance</th>
                  </tr>
                </thead>
                <tbody>
                  {mockConsultantPayouts.map((payout) => (
                    <tr key={payout.id}>
                      <td>{payout.name}</td>
                      <td>{payout.method}</td>
                      <td>{payout.schedule}</td>
                      <td>{payout.balance}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Client Invoices</h3>
            </div>
            <div className="card-body">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Client</th>
                    <th>Amount</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {mockClientInvoices.map((invoice) => (
                    <tr key={invoice.id}>
                      <td>{invoice.client}</td>
                      <td>{invoice.amount}</td>
                      <td>{invoice.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <button
                className="btn btn-primary"
                onClick={handleSetupPaymentIntegration}
              >
                Set up Payment Integration
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Billing;

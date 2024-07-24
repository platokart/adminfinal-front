import React, { useState } from "react";

const AddConsultant = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      alert("Please select a file first.");
      return;
    }

    const formData = new FormData();
    formData.append("Application.csv", file);

    try {
      const response = await fetch(
        "http://localhost:5000/admin/consultantUpload",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      console.log("File uploaded successfully:", result);
      alert(result.message);
    } catch (error) {
      console.error("Error uploading file:", error);
      console.log(error);
      alert("Error uploading file");
    }
  };

  return (
    <div className="content-wrapper">
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0">Add Consultant</h1>
            </div>
          </div>
        </div>
      </div>
      <section className="content">
        <div className="container-fluid">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Upload CSV File</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="file">CSV File</label>
                  <input
                    type="file"
                    className="form-control"
                    id="file"
                    name="file"
                    accept=".csv"
                    onChange={handleFileChange}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-success">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddConsultant;

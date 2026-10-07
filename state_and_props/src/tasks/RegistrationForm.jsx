import React, { useState } from "react";
import RegistrationSummary from "./RegistrationSummary.jsx";
const RegistrationForm = () => {
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault(); 
    const form=e.target;
    setSubmittedData({
      Name: form.Name.value,
      Email: form.Email.value,
      Phone: form.Phone.value,
      City: form.City.value,
      Gender: form.Gender.value,
      Terms: form.Terms.checked, 
    }); 
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <form className="card col-6" onSubmit={handleSubmit}>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                Name
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
                name="Name"
              />
            </div>

            <div className="input-group mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Recipient’s username"
                aria-label="Recipient’s username"
                aria-describedby="basic-addon2"
                name="Email"
              />
              <span className="input-group-text" id="basic-addon2">
                Email
              </span>
            </div>

            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon3">
                Phone
              </span>
              <input
                type="tel"
                className="form-control"
                placeholder="Phone"
                aria-label="Phone"
                aria-describedby="basic-addon3"
                name="Phone"
              />
            </div>

            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon4">
                City
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="City"
                aria-label="City"
                aria-describedby="basic-addon4"
                name="City"
              />
            </div>

            <select
              className="form-select"
              aria-label="Default select example"
              name="Gender"
              defaultValue=""
            >
              <option value="" disabled>
                Open this select Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="others">others</option>
            </select>
            <br />

            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="checkDefault"
                name="Terms"
              />
              <label className="form-check-label" htmlFor="checkDefault">
                Terms
              </label>
            </div>
            <br />

            <button type="submit" className="btn btn-primary mb-3">
              Submit
            </button>
          </form>

          <div className="card col-6">
            {submittedData && <RegistrationSummary form={submittedData} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default RegistrationForm;
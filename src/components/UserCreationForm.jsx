import React, { useState } from "react";

function UserCreationForm({ onFormSubmit }) {
  const [formData, setFormData] = useState({
    accountnumber: 0,
    fullname: "",
    accountType: "Checking Account",
    balance: "0",
    email: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    const errors = {};

    if (formData.fullname.trim() === "") {
      errors.fullname = "Full Name is required.";
    }

    if (parseFloat(formData.balance) <= 500) {
      errors.balance = "Initial balance must be above 500 Php.";
    }

    if (formData.email.trim() === "") {
      errors.email = "Email is required.";
    } else if (!isValidEmail(formData.email)) {
      errors.email = "Invalid email format.";
    }

    if (formData.password.length < 6) {
      errors.password = "Password must be at least 6 characters long.";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const saveUserDataToLocalstorage = (userData) => {
    const adminList = JSON.parse(localStorage.getItem("adminList")) || [];
    adminList.push(userData);
    localStorage.setItem("adminList", JSON.stringify(adminList));
  };

  const isValidEmail = (email) => {
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return emailPattern.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    if (validateForm()) {
      onFormSubmit(formData);

      saveUserDataToLocalstorage(formData);

      setFormData({
        accountnumber: 0,
        fullname: "",
        accountType: "Checking Account",
        balance: "0",
        email: "",
        password: "",
      });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <form id="survey-form" onSubmit={handleSubmit}>
        <div className="title-container">
          <h1 id="title">Create Account</h1>
          <p id="description">Account Creation for the Users</p>
        </div>
        <div className="input-wrapper">
          <label htmlFor="fullname">Full Name: </label>
          <input
            id="fullname"
            type="text"
            name="fullname"
            value={formData.fullname}
            onChange={handleInputChange}
          />
          {formErrors.fullname && (
            <span className="error">{formErrors.fullname}</span>
          )}
        </div>
        <hr />
        <div className="input-wrapper">
          <label htmlFor="account-type">Account Type</label>
          <select
            name="accountType"
            value={formData.accountType}
            onChange={handleInputChange}
          >
            <option value="Checking Account">Checking Account</option>
            <option value="Savings Account">Savings Account</option>
          </select>
        </div>
        <div className="input-wrapper">
          <label htmlFor="balance">Initial Balance</label>
          <input
            id="balance"
            type="text"
            name="balance"
            value={formData.balance}
            onChange={handleInputChange}
          />
          {formErrors.balance && (
            <span className="error">{formErrors.balance}</span>
          )}
        </div>
        <hr />
        <div className="input-wrapper">
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          {formErrors.email && (
            <span className="error">{formErrors.email}</span>
          )}
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          {formErrors.password && (
            <span className="error">{formErrors.password}</span>
          )}
        </div>
        <div className="input-wrapper">
          <input className="btn" type="submit" value="Create Account" />
        </div>
      </form>
    </div>
  );
}

export default UserCreationForm;

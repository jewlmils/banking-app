import React, { useState, useEffect } from "react";
import { userData } from "../../Data";

export function CreateUser() {
  const [formData, setFormData] = useState({
    accountNumber: "",
    fullname: "",
    accountType: "Checking Account",
    balance: "",
    email: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const generateAccountNumber = () => {
    const accountNumber = Date.now().toString();
    return accountNumber;
  };

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
    } else {
      const emailExists = userData.some(
        (user) => user.email === formData.email
      );
      if (emailExists) {
        errors.email = "Email already exists. Please use a different email.";
      }
    }

    if (formData.password.length < 6) {
      errors.password = "Password must be at least 6 characters long.";
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();

    if (Object.keys(errors).length === 0) {
      const accountNumber = generateAccountNumber();
      const newUser = {
        accountNumber,
        email: formData.email,
        password: formData.password,
        fullName: formData.fullname,
        isAdmin: false,
        balance: formData.balance,
        accountType: formData.accountType,
        loginStatus: false,
        expenseList: [],
        goals: [],
      };

      userData.push(newUser);

      localStorage.setItem("userData", JSON.stringify(userData));

      setFormData({
        accountNumber: "",
        fullname: "",
        accountType: "Checking Account",
        balance: "",
        email: "",
        password: "",
      });

      setFormErrors({});

      alert("User created successfully!");
    } else {
      setFormErrors(errors);
    }
  };

  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");

    if (!storedUserData) {
      localStorage.setItem("userData", JSON.stringify(userData));
    }
  }, []);

  return (
    <form id="survey-form" onSubmit={handleSubmit}>
      <div className="title-container-createuser">
        <h1 id="title-createuser">Create Account</h1>
        <p id="description-createuser">Create an Account for IBA Users</p>
      </div>
      <div className="input-wrapper">
        <label className="createuser-labels" htmlFor="fullname">
          FULL NAME
        </label>
        <input
          id="fullname"
          type="text"
          name="fullname"
          value={formData.fullname}
          onChange={handleInputChange}
          className="createuser-input"
        />
        {formErrors.fullname && (
          <span className="error-createuser">{formErrors.fullname}</span>
        )}
      </div>
      <hr className="divider-create" />
      <div className="input-wrapper">
        <label className="createuser-labels" htmlFor="account-type">
          ACCOUNT TYPE
        </label>
        <select
          name="accountType"
          value={formData.accountType}
          onChange={handleInputChange}
          className="createuser-select"
        >
          <option value="Checking Account">Checking Account</option>
          <option value="Savings Account">Savings Account</option>
        </select>
      </div>
      <div className="input-wrapper">
        <label className="createuser-labels" htmlFor="balance">
          INITIAL BALANCE
        </label>
        <input
          id="balance"
          type="text"
          name="balance"
          value={formData.balance}
          onChange={handleInputChange}
          className="createuser-input"
        />
        {formErrors.balance && (
          <span className="error-createuser">{formErrors.balance}</span>
        )}
      </div>
      <hr className="divider-create" />
      <div className="input-wrapper">
        <label className="createuser-labels" htmlFor="email">
          EMAIL ADDRESS
        </label>
        <input
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className="createuser-input"
        />
        {formErrors.email && (
          <span className="error-createuser">{formErrors.email}</span>
        )}
      </div>
      <div className="input-wrapper">
        <label className="createuser-labels" htmlFor="password">
          PASSWORD
        </label>
        <input
          id="password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          className="createuser-input"
        />
        {formErrors.password && (
          <span className="error-createuser">{formErrors.password}</span>
        )}
      </div>
      <div className="input-wrapper">
        <input className="btn-create" type="submit" value="Create Account" />
      </div>
    </form>
  );
}

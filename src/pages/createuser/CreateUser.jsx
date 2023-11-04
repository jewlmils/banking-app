import { Sidebar } from "../../components/Sidebar";
import { Header } from "../../components/Header";
import React, { useState } from "react";

export function CreateUser({ userData, setUserData }) {
  const [formData, setFormData] = useState({
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

    return errors;
  };

  const addNewUser = (newUser) => {
    setUserData([...userData, newUser]);
  };

  const isValidEmail = (email) => {
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return emailPattern.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();

    if (Object.keys(errors).length === 0) {
      const newUser = {
        email: formData.email,
        password: formData.password,
        fullName: formData.fullname,
        isAdmin: false,
        balance: formData.balance,
        accountType: formData.accountType,
      };

      addNewUser(newUser);

      localStorage.setItem("userData", JSON.stringify([...userData, newUser]));

      setFormData({
        fullname: "",
        accountType: "Checking Account",
        balance: "",
        email: "",
        password: "",
      });
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <div className="body">
      <Sidebar />
      <main>
        <Header />
        <section className="content">
          <div className="content-container">
            <div>
              <form id="survey-form">
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
                  <input
                    className="btn"
                    type="submit"
                    value="Create Account"
                    onClick={handleSubmit}
                  />
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import { userData } from "../../Data";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

    if (name === "balance" && isNaN(value) && value !== "") {
      return;
    }

    if (name === "fullname" && /\d/.test(value)) {
      return;
    }

    if (name === "fullname") {
      setFormData({
        ...formData,
        [name]: toTitleCase(value),
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const toTitleCase = (str) => {
    return str.replace(
      /\w\S*/g,
      (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    );
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

    setFormErrors(errors);

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

      toast.success("User created successfully!");
    } else {
      Object.values(errors).forEach((error) => {
        toast.error(error);
      });
    }
  };

  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");

    if (!storedUserData) {
      localStorage.setItem("userData", JSON.stringify(userData));
    }
  }, []);

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
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
            autoComplete="off"
          />
          {formErrors.fullname && (
            <span className="error-createuser">{formErrors.fullname}</span>
          )}
        </div>
        <hr className="divider-create" />
        <div className="divider-wrapper">
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
              autoComplete="off"
            />
            {formErrors.balance && (
              <span className="error-createuser">{formErrors.balance}</span>
            )}
          </div>
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
            autoComplete="off"
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
            autoComplete="off"
          />
          {formErrors.password && (
            <span className="error-createuser">{formErrors.password}</span>
          )}
        </div>
        <div className="input-wrapper">
          <input className="btn-create" type="submit" value="Create Account" />
        </div>
      </form>
    </>
  );
}

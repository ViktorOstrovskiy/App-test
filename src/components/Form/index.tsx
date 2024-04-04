import React from "react";
import { observer } from "mobx-react";
import "./Form.scss";
import { userStore } from "../../store/userStore";
import Modal from "../Modal";

const Form: React.FC = observer(() => {
  const {
    firstName,
    lastName,
    errors,
    setFirstName,
    setLastName,
    submitForm,
    showModal,
    closeModal,
  } = userStore;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitForm();
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="user-form" noValidate>
        <div className="input-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            className={errors.firstName ? "error-input" : ""}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            aria-describedby="firstNameError"
            aria-invalid={!!errors.firstName}
          />
          {errors.firstName && (
            <div id="firstNameError" className="error-message">
              {errors.firstName}
            </div>
          )}
        </div>
        <div className="input-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            className={errors.lastName ? "error-input" : ""}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            aria-describedby="lastNameError"
            aria-invalid={!!errors.lastName}
          />
          {errors.lastName && (
            <div id="lastNameError" className="error-message">
              {errors.lastName}
            </div>
          )}
        </div>
        <button type="submit">Submit</button>
      </form>
      {showModal && (
        <Modal firstName={firstName} lastName={lastName} onClose={closeModal} />
      )}
    </div>
  );
});

export default Form;

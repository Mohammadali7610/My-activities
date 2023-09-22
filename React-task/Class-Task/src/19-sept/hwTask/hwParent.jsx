import React, { useState } from 'react';
import NameInput from './hwChild';

function HwParent() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  return (
    <div>
      {/* Use the NameInput component */}
      <NameInput
        firstName={firstName}
        lastName={lastName}
        onFirstNameChange={handleFirstNameChange}
        onLastNameChange={handleLastNameChange}
      />

      <button className="btn-danger" onClick={toggleModal}>
        Click Me
      </button>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={toggleModal}>
              &times;
            </span>
            <p>
              First Name: {firstName}
              <br />
              Last Name: {lastName}
            </p>
            <button className="btn-primary" onClick={toggleModal}>
              Do Something
            </button>
            <button className="btn-secondary" onClick={toggleModal}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default HwParent;

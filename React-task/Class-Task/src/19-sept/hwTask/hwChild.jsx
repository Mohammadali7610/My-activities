import React from 'react';

function NameInput({ firstName, lastName, onFirstNameChange, onLastNameChange }) {
  return (
    <div>
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        value={firstName}
        onChange={onFirstNameChange}
      />
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={lastName}
        onChange={onLastNameChange}
      />
    </div>
  );
}

export default NameInput;

import React from "react";

const FormData = ({ formData }) => {
  return (
    <div className="form-summary">
      <h2>Form Data</h2>
      <p>Gender: {formData.gender}</p>
      <p>Height: {formData.heightFt} ft. {formData.heightIn} in.</p>
      <p>Weight: {formData.weight} lbs.</p>
      <p>Parents Checkbox Checked: {formData.parentsChecked ? "Yes" : "No"}</p>
      <p>Siblings Checkbox Checked: {formData.siblingsChecked ? "Yes" : "No"}</p>
      <p>Activity Level: {formData.selectedActivity}</p>
      <p>Diabetes: {formData.selectedDiabetes}</p>
      <p>Pregnancy Confirmation: {formData.isPregnant}</p>
    </div>
  );
};

export default FormData;

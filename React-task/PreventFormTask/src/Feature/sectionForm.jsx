import React, { useState } from "react";
import female from "../assets/image/female.png";
import male from "../assets/image/male.png";
import sofa from "../assets/image/sofa.png";
import cycle from "../assets/image/cycle.png";
import FormData from "./footer";

export const HealthForm = () => {
  const [formData, setFormData] = useState({
    gender: "",
    heightFt: "",
    heightIn: "",
    weight: "",
    parentsChecked: false,
    siblingsChecked: false,
    selectedActivity: "",
  });

  const [showFormData, setShowFormData] = useState(false);

  const handleGenderSelection = (gender) => {
    setFormData({ ...formData, gender });
  };

  const handleHeightFtChange = (event) => {
    setFormData({ ...formData, heightFt: event.target.value });
  };

  const handleHeightInChange = (event) => {
    setFormData({ ...formData, heightIn: event.target.value });
  };

  const handleWeightChange = (event) => {
    setFormData({ ...formData, weight: event.target.value });
  };

  const handleParentsCheckboxChange = () => {
    setFormData({ ...formData, parentsChecked: !formData.parentsChecked });
  };

  const handleSiblingsCheckboxChange = () => {
    setFormData({ ...formData, siblingsChecked: !formData.siblingsChecked });
  };

  const handleActivityChange = (activity) => {
    setFormData({ ...formData, selectedActivity: activity });
  };

  const handleDiabetesChange = (value) => {
    setFormData({ ...formData, selectedDiabetes: value });
  };

  const handlePregnancyChange = (value) => {
    setFormData({ ...formData, isPregnant: value });
  };

  const handleSubmit = () => {
    console.log("Form Data:", formData);
    setShowFormData(true);
  };

  return (
    <div className="health-form">
      <FormAbout />
      <YourGender
        selectedGender={formData.gender}
        onGenderSelection={handleGenderSelection}
      />
      <HeightWeightComponent
        heightFt={formData.heightFt}
        heightIn={formData.heightIn}
        weight={formData.weight}
        onHeightFtChange={handleHeightFtChange}
        onHeightInChange={handleHeightInChange}
        onWeightChange={handleWeightChange}
      />
      <FamilyHistory
        parentsChecked={formData.parentsChecked}
        siblingsChecked={formData.siblingsChecked}
        onParentsCheckboxChange={handleParentsCheckboxChange}
        onSiblingsCheckboxChange={handleSiblingsCheckboxChange}
      />
      <ActivityLevel
        selectedActivity={formData.selectedActivity}
        onActivityChange={handleActivityChange}
      />
      <Diabetes
        selectedDiabetes={formData.selectedDiabetes}
        onDiabetesChange={handleDiabetesChange}
      />
      <Pregnancy
        isPregnant={formData.isPregnant}
        onPregnancyChange={handlePregnancyChange}
      />
      <Submit onSubmit={handleSubmit} />

      {showFormData && <FormData formData={formData} />}
    </div>
  );
};

export const FormAbout = () => (
  <div className="formabout">
    <h3>So far so good. Let`s talk about your health</h3>
    <h5>
      We use this info to put you in a group with people close to your
      attributes (weird choice of word)
    </h5>
  </div>
);

export const YourGender = ({ selectedGender, onGenderSelection }) => {
  const femaleButtonStyle = {
    border:
      selectedGender === "Female" ? "2px solid red" : "2px solid transparent",
  };

  const maleButtonStyle = {
    border:
      selectedGender === "Male" ? "2px solid red" : "2px solid transparent",
  };

  return (
    <div className="gender-main">
      <div className="gender">
        <div className="yourgender">
          <h4>YOUR GENDER</h4>
        </div>
        <div className="selectgender">
          <div>
            <button
              className="female-button"
              onClick={() => onGenderSelection("Female")}
            >
              <img src={female} alt="Female" style={femaleButtonStyle} />
              <h6>Female</h6>
            </button>
          </div>
          <div>
            <button
              className="male-button"
              onClick={() => onGenderSelection("Male")}
            >
              <img src={male} alt="Male" style={maleButtonStyle} />
              <h6>Male</h6>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const HeightWeightComponent = ({
  heightFt,
  heightIn,
  weight,
  onHeightFtChange,
  onHeightInChange,
  onWeightChange,
}) => {
  return (
    <div className="height-and-weight-main">
      <div className="height-and-weight">
        <div className="your-hw">
          <h4>HEIGHT & WEIGHT</h4>
        </div>
        <div className="height-and-weight-inputs">
          <div>
            <input
              style={{ width: "40px" }}
              type="number"
              id="height-ft"
              value={heightFt}
              onChange={onHeightFtChange}
            />
            <label htmlFor="height-ft">ft.</label>
          </div>
          <div>
            <input
              style={{ width: "50px" }}
              type="number"
              id="height-in"
              value={heightIn}
              onChange={onHeightInChange}
            />
            <label htmlFor="height-in">in.</label>
          </div>
          <div>
            <input
              style={{ width: "65px" }}
              type="number"
              id="weight"
              value={weight}
              onChange={onWeightChange}
            />
            <label htmlFor="weight">lbs.</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export const FamilyHistory = ({
  parentsChecked,
  siblingsChecked,
  onParentsCheckboxChange,
  onSiblingsCheckboxChange,
}) => {
  return (
    <div className="familyhistory">
      <div className="fm">
        <h3>FAMILY HISTORY</h3>
      </div>

      <div className="fmOptions">
        <div className="fmOptions-a">
          <h4>Anyone in your family have prediabetes?</h4>
          <p>Check all that apply. If you would rather not say, that's okay.</p>
        </div>
        <div className="fmOptions-b">
          <div>
            <input
              style={{ padding: "10px" }}
              type="checkbox"
              id="parents-checkbox"
              checked={parentsChecked}
              onChange={onParentsCheckboxChange}
            />
            <p>Parents</p>
          </div>
          <div>
            <input
              style={{ padding: "10px" }}
              type="checkbox"
              id="siblings-checkbox"
              checked={siblingsChecked}
              onChange={onSiblingsCheckboxChange}
            />
            <p>Siblings</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ActivityLevel = ({ selectedActivity, onActivityChange }) => {
  return (
    <div className="activitylevel">
      <div className="al">
        <h4>ACTIVITY LEVEL</h4>
      </div>
      <div className="activitylevelOptions">
        <div>
          <h3>How active are you on a weekly basis?</h3>
        </div>
        <div className="activity-radio">
          <div className="hello">
            <div className="radio-div">
              <input
                className="circleRadio"
                type="radio"
                id="not-very-active"
                name="activity"
                value="Not very active"
                checked={selectedActivity === "Not very active"}
                onChange={() => onActivityChange("Not very active")}
              />
            </div>
            <div className="radioBox-div1">
              <img className="activity-img" src={sofa} alt="" />
              <h6 className="h6">Not very active</h6>
              <p className="p">
                Less than 60 minutes of physical activity per week
              </p>
            </div>
          </div>
          <div className="hello">
            <div className="radio-div">
              <input
                className="circleRadio"
                type="radio"
                id="active"
                name="activity"
                value="Active"
                checked={selectedActivity === "Active"}
                onChange={() => onActivityChange("Active")}
              />
            </div>
            <div className="radioBox-div1">
              <img className="activity-img" src={cycle} alt="" />
              <h6 className="h6">Active</h6>
              <p className="p">
                60+ minutes of physical activity per week
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Diabetes = ({ selectedDiabetes, onDiabetesChange }) => {
  return (
    <div className="diabetes">
      <div className="dia">
        <h3>DIABETES</h3>
      </div>
      <div className="diaOptions">
        <div>
          <h3 style={{ color: "rgb(104, 96, 96)" }}>
            Have you been diagnosed with diabetes before?
          </h3>
        </div>
        <div className="inputBox-storage">
          <div className="dia-inputBox">
            <input
              type="radio"
              id="preDiabetes"
              name="diabetes"
              value="Pre-diabetes"
              checked={selectedDiabetes === "Pre-diabetes"}
              onChange={() => onDiabetesChange("Pre-diabetes")}
            />
            <label htmlFor="preDiabetes">Pre-diabetes</label>
          </div>
          <div className="dia-inputBox">
            <input
              type="radio"
              id="type2Diabetes"
              name="diabetes"
              value="Type-2"
              checked={selectedDiabetes === "Type-2"}
              onChange={() => onDiabetesChange("Type-2")}
            />
            <label htmlFor="type2Diabetes">Type-2</label>
          </div>
          <div className="dia-inputBox">
            <input
              type="radio"
              id="neitherDiabetes"
              name="diabetes"
              value="Neither"
              checked={selectedDiabetes === "Neither"}
              onChange={() => onDiabetesChange("Neither")}
            />
            <label htmlFor="neitherDiabetes">Neither</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Pregnancy = ({ isPregnant, onPregnancyChange }) => {
  return (
    <div className="pregnancy">
      <div className="preg">
        <h3>PREGNANCY</h3>
      </div>
      <div className="preOptions">
        <div className="preAbout">
          <h3 style={{ color: "rgb(104, 96, 96)" }}>
            Are you currently pregnant?
          </h3>
          <p style={{ color: "grey" }}>
            We need to have some friendly help text here.
          </p>
        </div>
        <div className="pregSelect">
          <div className="pregSelect-a">
            <div className="preOP">
              <input
                type="radio"
                id="pregnant"
                name="pregnancyStatus"
                value="Pregnant"
                checked={isPregnant === "Pregnant"}
                onChange={() => onPregnancyChange("Pregnant")}
              />
            </div>
            <div className="pregOP2">
              <h3>Pregnant</h3>
              <p>Or have given birth within the last 6 weeks</p>
            </div>
          </div>
          <div className="pregSelect-a">
            <div className="preOP">
              <input
                type="radio"
                id="notPregnant"
                name="pregnancyStatus"
                value="Not Pregnant"
                checked={isPregnant === "Not Pregnant"}
                onChange={() => onPregnancyChange("Not Pregnant")}
              />
            </div>
            <div className="pregOP2">
              <h3>Not Pregnant</h3>
              <p>Or have not given birth within the last 6 weeks</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Submit = ({ onSubmit }) => {
  return (
    <div className="sub">
      <button onClick={onSubmit}>COMPLETE</button>
    </div>
  );
};

export default HealthForm;

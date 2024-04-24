import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import "./NewBoxForm.css";

const NewBoxForm = ({ addBox }) => {
  const INITIAL_STATE = {
    width: "",
    height: "",
    color: "",
  };
  const [data, SetData] = useState(INITIAL_STATE); // Manage state for form data

  const handleChange = (e) => {
    const { name, value } = e.target;
    SetData((formData) => ({ ...formData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.width && data.height && data.color) {
      addBox({ ...data, id: uuid() });
      SetData(INITIAL_STATE);
    }
  };

  return (
    <div className="NewBoxForm">
      <form onSubmit={handleSubmit}>
        <label htmlFor="width">Set width:</label>
        <input
          type="text"
          id="width"
          name="width"
          placeholder="Enter width"
          value={data.width}
          onChange={handleChange}
        />
        <label htmlFor="height">Set height:</label>
        <input
          type="text"
          id="name"
          name="height"
          placeholder="Enter height"
          value={data.height}
          onChange={handleChange}
        />
        <label htmlFor="color">Set color:</label>
        <input
          type="text"
          id="color"
          name="color"
          placeholder="Enter color"
          value={data.color}
          onChange={handleChange}
        />
        <button type="submit" name="add-box">
          Add box
        </button>
      </form>
    </div>
  );
};
export default NewBoxForm;

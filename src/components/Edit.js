import React, { useState } from "react";

const Edit = ({ setIsEditOpen, isEditingRowdata, handleClickSave }) => {
  const [editData, setEditdata] = useState({ ...isEditingRowdata });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditdata((prev) => ({ ...prev, [name]: value }));
  };
  const handleSaveClick = () => {
    handleClickSave(editData);
    setIsEditOpen();
  };

  return (
    <div className="model">
      <div className="model-content">
        <h3>Edit tablelist</h3>
        <h1 style={{ color: "blue", fontSize: "24px", textAlign: "center" }}>
          {editData.name}
        </h1>

        <label>Name</label>
        <input
          type="text"
          name="name"
          value={editData.name}
          onChange={handleChange}
        />
        <label>Age</label>
        <input
          type="text"
          name="age"
          value={editData.age}
          onChange={handleChange}
        />
        <label>City</label>
        <input
          type="text"
          name="city"
          value={editData.city}
          onChange={handleChange}
        />
        <label>PinCode</label>
        <input
          type="text"
          name="pinCode"
          value={editData.pinCode}
          onChange={handleChange}
        />
        <div className="model-buttons">
          <button onClick={() => setIsEditOpen(false)}>Close</button>
          <button onClick={handleSaveClick}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default Edit;

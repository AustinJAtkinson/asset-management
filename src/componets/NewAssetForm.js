import React, { useState } from "react";

class Asset {
  constructor(name, value) {
    this.name = name;
    this.value = value;
    this.guid = createUUID();
  }
}

export const NewAssetForm = ({ addNewAsset }) => {
  const [name, setName] = useState("");
  const [value, setValue] = useState("");

  const handleValueChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (name && value) {
      addNewAsset(new Asset(name, value));
      setName("");
      setValue("");
    } else {
      console.log("Invalid Input");
    }
  };

  return (
    <div>
      <h4>Add a new asset</h4>
      <form onSubmit={onSubmit}>
        <div className="row">
          <div className="col">
            <input
              className="form-control"
              type="text"
              placeholder="Asset Name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
          <div className="col">
            <input
              className="form-control"
              type="text"
              placeholder="Asset Value"
              onChange={handleValueChange}
              value={value}
            />
          </div>
          <div className="col">
            <button className="btn btn-success" type="submit">
              Add Asset
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

function createUUID() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

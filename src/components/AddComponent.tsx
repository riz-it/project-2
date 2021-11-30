import React, { useState } from "react";

const AddComponent = () => {
  const [Task, setTask] = useState("");
  return (
    <div className="container mt-4">
      <div className="mb-3">
        <label className="form-label">Priority</label>
        <br />
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            value="option1"
          />
          <label className="form-check-label">Normal</label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio2"
            value="option2"
          />
          <label className="form-check-label">Important</label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio2"
            value="option2"
          />
          <label className="form-check-label">Very Important</label>
        </div>
      </div>
      <div className="mb-3">
        <label className="form-label">Task</label>
        <textarea
          onChange={(e) => {
            setTask(e.target.value);
          }}
          value={Task}
          className="form-control"
          id="exampleFormControlTextarea1"
        ></textarea>
      </div>
      <div className="mb-3">
        <label className="form-label">Status</label>
        <select className="form-select" aria-label="Default select example">
          <option selected value="1">
            On Progress
          </option>
          <option value="2">Success</option>
        </select>
      </div>
      <div className="mb-3 d-flex justify-content-end">
        <button type="button" className="btn btn-dark">
          Submit
        </button>
      </div>
    </div>
  );
};

export default AddComponent;

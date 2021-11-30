import React, { useState, useEffect } from "react";
import { db } from "../config/firebase";
import {
  collection,
  doc,
  addDoc,
  updateDoc,
} from "firebase/firestore";

interface Props {
  dataFromParent: any
  setTasks: (isUpdate: boolean) => void
}

const AddComponent = (props: Props) => {
  const { dataFromParent, setTasks } = props

  const tasksCollectionRef = collection(db, "tasks");
  const [priority, setPriority] = useState("Normal");
  const [task, setTask] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    const { data } = dataFromParent;

    if (data) {
      setPriority(data.priority);
      setTask(data.task);
      setStatus(data.status);
    }
  }, [dataFromParent]);

  const onSubmit = async () => {
    const data = { priority, task, status }
    let isUpdate = false;

    if (dataFromParent.data) {
      isUpdate = true;
      const docRef = doc(db, "tasks", dataFromParent.id);
      await updateDoc(docRef, data);
    } else {
      await addDoc(tasksCollectionRef, data);
    }

    setTasks(isUpdate);
    onClear();
  };

  const onClear = () => {
    setPriority("Normal");
    setTask("");
    setStatus("");
  };

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
            value="Normal"
            checked={priority === "Normal"}
            onClick={() => setPriority("Normal")}
          />
          <label className="form-check-label">Normal</label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio2"
            value="Important"
            checked={priority === "Important"}
            onClick={() => setPriority("Important")}
          />
          <label className="form-check-label">Important</label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio2"
            value="Very Important"
            checked={priority === "Very Important"}
            onClick={() => setPriority("Very Important")}
          />
          <label className="form-check-label">Very Important</label>
        </div>
      </div>
      <div className="mb-3">
        <label className="form-label">Task</label>
        <textarea
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
          }}
          className="form-control"
          id="exampleFormControlTextarea1"
        ></textarea>
      </div>
      <div className="mb-3">
        <label className="form-label">Status</label>
        <input type="text" className="form-control" value={status} onChange={e => setStatus(e.target.value)} />
      </div>
      <div className="mb-3 d-flex justify-content-end">
        <button type="button" className="btn btn-dark" onClick={onSubmit}>
          {dataFromParent.data ? "Update" : "Submit"}
        </button>
      </div>
    </div>
  );
};

export default AddComponent;

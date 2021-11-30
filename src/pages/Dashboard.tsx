import { signOut } from "@firebase/auth";
import { auth, db } from "../config/firebase";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  doc,
  collection,
  query,
  where,
  getDocs,
  deleteDoc,
} from "firebase/firestore";
import AddComponent from "../components/AddComponent";

const Dashboard: React.FC = () => {
  const history = useHistory();
  const tasksCollectionRef = collection(db, "tasks");
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("Normal");
  const [dataFromParent, setDataFromParent] = useState({});

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (!user) {
        history.push("/login");
      } else {
        // action else
      }
    });

    getTasks();
  }, []);

  const logout = async () => {
    await signOut(auth);
    history.push("/login");
  };

  const getTasks = async () => {
    const data: any = await getDocs(tasksCollectionRef);
    setTasks(data.docs);
  };

  const setTaskCondition = (isUpdate: boolean) => {
    if (isUpdate) setDataFromParent({});
    getTasks();
  };

  const onDelete = async (item: any, index: number) => {
    const docRef = doc(db, "tasks", item.id);
    await deleteDoc(docRef);
    setTasks(prev => {
      const newData = [...prev];
      newData.splice(index, 1);
      return newData;
    });
  };

  const onUpdate = (item: any, index: number) => {
    setDataFromParent({ id: item.id, data: item.data() });
  };

  const onFilter = async () => {
    const q = query(tasksCollectionRef, where("priority", "==", filter));
    const data: any = await getDocs(q);
    setTasks(data.docs);
  };

  return (
    <div>
      <div className="row">
        <div className="navbar navbar-dark bg-dark">
          <div className="container-fluid p-2">
            <div className="col d-flex justify-content-end">
              <a className="navbar-brand">
                <h3>Welcome</h3>
              </a>
            </div>
            <div className="col d-flex justify-content-end">
              <button
                style={{ marginRight: 10 }}
                type="button"
                onClick={logout}
                className="btn btn-secondary"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="card m-3 bg-light">
            <div className="card-body">
              <AddComponent dataFromParent={dataFromParent} setTasks={isUpdate => setTaskCondition(isUpdate)} />
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card m-3 bg-light">
            <div className="card-body">
              <div className="row">
                <div className="col-auto">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    defaultValue={filter}
                    onChange={e => setFilter(e.target.value)}
                  >
                    <option value="Normal">
                      Normal
                    </option>
                    <option value="Important">Important</option>
                    <option value="Very Important">Very Important</option>
                  </select>
                </div>
                <div className="col-auto">
                  <button type="submit" className="btn btn-dark mb-3" style={{ marginRight: 8 }} onClick={onFilter}>
                    Filter
                  </button>
                  <button type="submit" className="btn btn-danger mb-3" onClick={() => getTasks()}>
                    Reset
                  </button>
                </div>
              </div>
              <table className="table table-dark table-striped">
                <thead>
                  <tr>
                    <th scope="col">Priority</th>
                    <th scope="col">Activity</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {tasks.map((item: any, index: number) => {
                    const row = item.data()
                    return (
                      <tr key={index}>
                        <th scope="row">{row.priority}</th>
                        <td>{row.task}</td>
                        <td>{row.status}</td>
                        <td>
                          <button
                            type="button"
                            className="btn mx-1 btn-sm btn-danger"
                            onClick={() => onDelete(item, index)}
                          >
                            Hapus
                          </button>
                          <button
                            type="button"
                            className="btn mx-1 btn-sm btn-primary"
                            onClick={() => onUpdate(item, index)}
                          >
                            Edit
                          </button>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

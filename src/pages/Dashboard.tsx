import { signOut } from "@firebase/auth";
import { auth, db } from "../config/firebase";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import AddComponent from "../components/AddComponent";

const Dashboard: React.FC = () => {
  const history = useHistory();
  const usersCollectionRef = collection(db, "users");

  const tasksCollectionRef = collection(db, "tasks");
  const [tasks, setTasks] = useState({});
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (!user) {
        history.push("/login");
      } else {
      }
    });

    const getTasks = async () => {
      const data = await getDocs(tasksCollectionRef);
      setTasks(data.docs.map((taskdocument) => ({ ...taskdocument.data() })));
    };

    getTasks();
  });
  const logout = async () => {
    await signOut(auth);
    history.push("/login");
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
              <AddComponent />
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card m-3 bg-light">
            <div className="card-body">
              <form className="row g-3">
                <div className="col-auto">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected value="1">
                      Normal
                    </option>
                    <option value="2">Important</option>
                    <option value="2">Very Important</option>
                  </select>
                </div>
                <div className="col-auto">
                  <button type="submit" className="btn btn-dark mb-3">
                    Filter
                  </button>
                </div>
              </form>
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
                  <tr>
                    <th scope="row">Penting</th>
                    <td>Tugas 1</td>
                    <td>Progres</td>
                    <td>
                      <button
                        type="button"
                        className="btn mx-1 btn-sm btn-danger"
                      >
                        Danger
                      </button>
                      <button
                        type="button"
                        className="btn mx-1 btn-sm btn-warning"
                      >
                        Warning
                      </button>
                    </td>
                  </tr>
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

import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "@firebase/auth";
import { auth, db } from "../config/firebase";

import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

import "./HeaderContainer.css";
interface ContainerProps {}

const RegisterContainer: React.FC<ContainerProps> = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registSuccess, setRegistSuccess] = useState("");
  const [registError, setRegistError] = useState("");
  const userCollection = collection(db, "users");

  const handleRegister = async (e: any) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      try {
        await addDoc(userCollection, {
          name: fullName,
          email: email,
        });
        setFullName("");
        setEmail("");
        setPassword("");
        setRegistSuccess("Success create account click here to login");
      } catch (error) {
        console.log(error);
      }
      const createUserName = async () => {};
    } catch (err) {
      if (err instanceof Error) {
        console.log(err.message);
        if (/auth\/invalid-email/.test(err.message)) {
          setRegistError("Email tidak valid.");
        } else if (/auth\/weak-password/.test(err.message)) {
          setRegistError("Kata sandi harus 6 karakter.");
        } else {
          setRegistError(err.message);
        }
      }
    }
  };

  return (
    <div className="container">
      <br></br>
      <br></br>
      <h2>Register Page</h2>
      <br></br>
      {registSuccess && (
        <div className="alert alert-success" role="alert">
          {registSuccess} klik untuk login{" "}
          <Link
            style={{ textDecoration: "none" }}
            to="/login"
            className="fw-bolder"
          >
            Login
          </Link>
        </div>
      )}

      {registError && <div className="alert alert-danger">{registError}</div>}

      <label>Full Name</label>
      <input
        placeholder="Enter Full Name"
        type="text"
        className="form-control"
        required
        onChange={(e) => {
          setFullName(e.target.value);
        }}
        value={fullName}
      />
      <br></br>
      <label>Email</label>
      <input
        placeholder="Enter Email"
        type="email"
        className="form-control"
        required
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <br></br>
      <label>Password</label>
      <input
        placeholder="Enter Password"
        type="password"
        className="form-control"
        required
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <br></br>
      <button onClick={handleRegister} className="btn btn-success mybtn2">
        Sign Up
      </button>

      <span style={{ marginLeft: 10 }}>
        Already have an account ?{" "}
        <Link style={{ textDecoration: "none" }} to="/login">
          {" "}
          Login Here
        </Link>
      </span>
    </div>
  );
};

export default RegisterContainer;

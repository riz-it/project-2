import { signInWithEmailAndPassword } from "@firebase/auth";
import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";

const Login: React.FC = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const history = useHistory();

  const loginApp = () => {
    const user = signInWithEmailAndPassword(auth, loginEmail, loginPassword);
    user
      .then((result) => {
        history.push("/dashboard");
      })
      .catch((err) => {
        console.log(err.message);
        if (/auth\/invalid-email/.test(err.message)) {
          setLoginError("Akun tidak ditemukan.");
        } else {
          setLoginError(err.message);
        }
      });
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login Page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {loginError && <div className="alert alert-danger">{loginError}</div>}
        <IonInput
          placeholder="Username"
          onIonChange={(e) => {
            setLoginEmail(e.detail.value!);
          }}
        />
        <IonInput
          placeholder="Password"
          onIonChange={(e) => {
            setLoginPassword(e.detail.value!);
          }}
        />
        <IonButton
          onClick={() => {
            loginApp();
          }}
        >
          Login
        </IonButton>

        <p>
          Create Account?<Link to="register">Register</Link>
        </p>
      </IonContent>
    </IonPage>
  );
};

export default Login;

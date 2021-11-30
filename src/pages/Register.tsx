import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import RegisterContainer from "../components/RegisterContainer";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader></IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">ToDoList</IonTitle>
          </IonToolbar>
        </IonHeader>
        <RegisterContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;

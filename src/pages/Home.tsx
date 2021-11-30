import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";

import HeaderContainer from "../components/HeaderContainer";
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
        <HeaderContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;

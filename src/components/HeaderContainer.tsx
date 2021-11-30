import { IonButton } from "@ionic/react";
import "./HeaderContainer.css";
interface ContainerProps {}

const HeaderContainer: React.FC<ContainerProps> = () => {
  return (
    <div className="header-box">
      <div className="leftside">
        <div className="img">
          <img src="https://lh3.googleusercontent.com/LkENGw3fWsRDbvJji7t12OG0TRE42WX-SoNO9ugfVvI7rbkxIK2TRel_gL4AfmDsaTg" alt="" />
        </div>
        <div className="content">
          <div className="heading-big">Lots of work to do ?</div>
          <div className="heading-small">Lets make a list</div>
        </div>
      </div>
      <div className="rightside">
        <IonButton routerLink="/register" color="primary" shape="round">
          Register
        </IonButton>
        <IonButton routerLink="/login" color="secondary" shape="round">
          Login
        </IonButton>
      </div>
    </div>
  );
};

export default HeaderContainer;

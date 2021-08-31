import "./App.css";
import "./Component/LoginPage.css";
import BtnLogin from "./BtnLogin";
import BtnRegister from "./BtnRegister";
const LoginPage = () => {
  return (
    <div className="background-login">
      <div className="row-login">
        <div className="column-icon">
          <img className="icon-login" src="/img/icon1.png"></img>
        </div>
        <div className="column-login">
          <BtnLogin />
          <BtnRegister />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

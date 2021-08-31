import "./App.css";
import "./Component/LoginPage.css";
import BtnLogin from "./BtnLogin";
import BtnRegister from "./BtnRegister";
import { Typography } from "antd";

const { Title } = Typography;
const LoginPage = () => {
  return (
    <div>
      <div className="background-login">
        <Title classname="tittlelogin">
          เว็บแอพพลิเคชันตรวจสอบสถานะการใช้งานอุปกรณ์ทางการแพทย์
        </Title>
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
    </div>
  );
};

export default LoginPage;

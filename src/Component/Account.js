import { Card } from "antd";
import "./Account.css";

const Account = () => {
  const { Meta } = Card;
  return (
    <div className="Profile">
      <Card
        hoverable
        style={{ width: 350 }}
        cover={
          <img
            alt="example"
            src="https://www.engdict.com/data/dict/media/images_public/docto-00084415637421919568242424_normal.png"
          />
        }
      >
        <Meta title="XXXX XXX" description="XX" />
        <Meta title="asdasdasd" />
      </Card>
    </div>
  );
};
export default Account;

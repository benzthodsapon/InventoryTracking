import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const { Meta } = Card;
const OxygenTank = () => {
    return (
<Card
    style={{ width: 300 }}
    cover={
      <img
        alt="example"
        src="https://www.หลีอ๊อกซิเจน.com/wp-content/uploads/2020/07/nissen-heatlhcare-medset-1-5q-no10-300x300.jpg"
      />
    }
    actions={[
      <SettingOutlined key="setting" />,
      <EditOutlined key="edit" />,
      <EllipsisOutlined key="ellipsis" />,
    ]}
  >
    <Meta
      title="Card title"
      description="This is the description"
    />
  </Card>
 
)
};

export default OxygenTank;
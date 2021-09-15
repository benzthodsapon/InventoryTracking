import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const { Meta } = Card;
const Bed  = () => {
    return (
<Card
    style={{ width: 300 }}
    cover={
      <img
        alt="example"
        src="https://sc04.alicdn.com/kf/HTB14W0.cxTI8KJjSspiq6zM4FXar.jpg"
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

export default Bed;
import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const { Meta } = Card;
const Wheelcahir = () => {
    return (
<Card
    style={{ width: 300 }}
    cover={
      <img
        alt="example"
        src="https://aumento.officemate.co.th/media/catalog/product/d/0/d000001.jpg?imwidth=640"
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

export default Wheelcahir;
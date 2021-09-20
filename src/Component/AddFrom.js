import React, { useState } from 'react';
import { Modal, Button,Form, Input, InputNumber, } from 'antd';
import PageHome from '../Page/PageHome';

const AddFrom = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
      รายงานอุปกรณ์ชำรุด
      </Button>
      <Modal title="รายงานอุปกรณ์ชำรุด" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
      <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
      <Form.Item name={['user', 'name']} label="ชื่อ" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'status']} label="วันที่" rules={[{ type: 'status' }]}>
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'amount']} label="จำนวน" rules={[{ type: 'number', min: 0, max: 99 }]}>
        <InputNumber />
      </Form.Item>
      
      <Form.Item name={['user', 'introduction']} label="สาเหตุ">
        <Input.TextArea />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          ส่ง
        </Button>
      </Form.Item>
    </Form>
      </Modal>
    </>
  );
};
export default AddFrom;
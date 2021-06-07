import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import PopupLogin from "./PopupLogin";
const BtnLogin = () => {
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

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Login
      </Button>
      <Modal title="Login" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <PopupLogin />
      </Modal>
    </>
  );
};
    
export default BtnLogin;


import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import PopupRegister from './PopupRegister';

const BtnRegister = () => {
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
      <Button type="primary" onClick={showModal}style={{width: "70%",height:"50px",marginTop:"50px" }}>
        Register
      </Button>
      <Modal title="Register" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <PopupRegister />
      </Modal>
    </>
  );
};
export default BtnRegister;
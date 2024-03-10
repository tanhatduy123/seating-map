import React from "react";
import { Input, Modal } from "antd";

export default function ModalAddInfo(props) {
  const { isModalOpen, setIsModalOpen } = props;

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        cancelText="Hủy bỏ"
        okText="Xác nhận"
      >
        <div className="d-flex justify-content-center flex-column align-items-center">
          <div className="circle">
            <img
              src="https://www.vietnamfineart.com.vn/wp-content/uploads/2023/07/anh-gai-xinh-vn-3.jpg"
              alt=""
            />
          </div>
          <input type="file" />
        </div>

        <div>
          <p>Họ Và Tên</p>
          <Input />
        </div>
        <div className="mt-3">
          <div className="d-flex justify-content-between">
            <div style={{ width: "45%" }}>
              <p>Mã Nhân viên</p>
              <Input />
            </div>
            <div style={{ width: "45%" }}>
              <p>Số điện thoại</p>
              <Input />
            </div>
          </div>
        </div>
        <div className="mt-3">
          <p>Vị trí ngồi</p>
          <Input />
        </div>
      </Modal>
    </>
  );
}

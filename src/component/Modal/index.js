import React, { useRef, useState } from "react";
import { Input, Modal } from "antd";

export default function ModalAddInfo(props) {
  const { isModalOpen, setIsModalOpen } = props;
  const imgRef = useRef(null);
  // const [dataDetail, setDataDetail] = useState([]);
  const [dataSubmit, setdataSubmit] = useState({});

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
            {dataSubmit?.imageAvatar ? (
              <img
                src={URL.createObjectURL(dataSubmit.imageAvatar)}
                alt=""
                onClick={() => imgRef.current.click()}
                style={{ cursor: "pointer" }}
              />
            ) : (
              <img
                src={require("../../assets/user-defaut.png")}
                alt=""
                onClick={() => imgRef.current.click()}
                style={{ cursor: "pointer" }}
              />
            )}
          </div>
          <input
            ref={imgRef}
            type="file"
            hidden
            onChange={(event) =>
              setdataSubmit({
                ...dataSubmit,
                imageAvatar: event.target.files[0],
              })
            }
          />
        </div>

        <div>
          <p>Họ Và Tên</p>
          <Input
            value={dataSubmit?.name}
            onChange={(event) =>
              setdataSubmit({ ...dataSubmit, name: event.target.value })
            }
          />
        </div>
        <div className="mt-3">
          <div className="d-flex justify-content-between">
            <div style={{ width: "47%" }}>
              <p>Bộ phận</p>
              <Input
                value={dataSubmit?.part}
                onChange={(event) =>
                  setdataSubmit({ ...dataSubmit, part: event.target.value })
                }
              />
            </div>
            <div style={{ width: "47%" }}>
              <p>Số điện thoại</p>
              <Input
                value={dataSubmit?.phone}
                onChange={(event) =>
                  setdataSubmit({ ...dataSubmit, phone: event.target.value })
                }
              />
            </div>
          </div>
        </div>
        <div className="mt-3">
          <div className="d-flex justify-content-between">
            <div style={{ width: "47%" }}>
              <p>Vị trí ngồi</p>
              <Input
                value={dataSubmit?.seat}
                onChange={(event) =>
                  setdataSubmit({ ...dataSubmit, seat: event.target.value })
                }
              />
            </div>
            <div style={{ width: "47%" }}>
              <p>Mã nhân viên</p>
              <Input
                value={dataSubmit?.code}
                onChange={(event) =>
                  setdataSubmit({ ...dataSubmit, code: event.target.value })
                }
              />
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}

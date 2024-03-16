import React, { useEffect, useRef, useState } from "react";
import { Input, Modal } from "antd";
import axios from "axios";

const APIAddUser = async (props) => {
  const { dataSubmit, setIsModalOpen } = props;
  const id = dataSubmit?.idSeat;
  const params = {
    idSeat: id,
    nameUser: dataSubmit.name,
    msnv: dataSubmit.code,
    title: dataSubmit.part,
    avatar: dataSubmit.imageAvatar,
    idUser: dataSubmit.idUser || null,
    phone: dataSubmit.phone,
  };
  await axios
    .post(`http://localhost:3002/seat/seat-change/${id}`, params)
    .then((res) => {
      setIsModalOpen(false);
      window.location.reload();
    })
    .catch((error) => {
      console.log(error);
    });
};

export default function ModalAddInfo(props) {
  const { isModalOpen, setIsModalOpen, dataDetailUser } = props;
  const imgRef = useRef(null);
  const [dataSubmit, setdataSubmit] = useState({});

  const handleOk = () => {
    // setIsModalOpen(false);
    HandleSubmit();
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {
    if (dataDetailUser && Object.keys(dataDetailUser).length > 0) {
      setdataSubmit({
        ...dataSubmit,
        imageAvatar: dataDetailUser?.user?.avatar,
        name: dataDetailUser?.user?.nameUser,
        part: dataDetailUser?.user?.title,
        phone: dataDetailUser?.user?.phone,
        seat: dataDetailUser?.nameSeat,
        code: dataDetailUser?.user?.msnv,
      });
    }
  }, [dataDetailUser, dataSubmit]);

  const HandleSubmit = () => {
    APIAddUser({
      dataSubmit: {
        ...dataSubmit,
        idSeat: dataDetailUser?.idSeat,
        idUser: dataDetailUser?.user?.idUser || null,
      },
      setIsModalOpen,
    });
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

import React, { useEffect, useRef, useState } from "react";
import { Button, Input, Modal } from "antd";
import axios from "axios";
import { API_URL } from "../../config/indext";
import ModalChange from "./ModalChange";

const APIAddUser = async (props) => {
  const { dataSubmit, setIsModalOpen, setISsubmit, setIsloading } = props;
  const id = dataSubmit?.idSeat;
  // Tạo formData
  const formData = new FormData();
  formData.append("idSeat", id);
  formData.append("nameUser", dataSubmit.name);
  formData.append("msnv", dataSubmit.code);
  formData.append("title", dataSubmit.part);
  formData.append("phone", dataSubmit.phone);
  formData.append("idUser", dataSubmit.idUser || null);
  formData.append("avatar", dataSubmit.imageAvatar); // Thêm hình ảnh vào formData

  setIsloading(true);
  await axios
    .post(`${API_URL}/seat/seat-change/${id}`, formData)
    .then((res) => {
      setIsModalOpen(false);
      setISsubmit(false);
      setIsloading(false);
      window.location.reload();
    })
    .catch((error) => {
      console.log(error);
      setIsloading(false);
      setIsModalOpen(false);
    });
};
const APIDelete = async (props) => {
  const { setIsloading, id } = props;
  setIsloading(true);
  await axios
    .delete(`${API_URL}/seat/delete/${id}`)
    .then((res) => {
      console.log(res);
      setIsloading(false);
      window.location.reload();
    })
    .catch((error) => {
      setIsloading(false);
      console.log(error);
    });
};
export default function ModalAddInfo(props) {
  const admin = sessionStorage.getItem("admin");
  const { isModalOpen, setIsModalOpen, dataDetailUser = {} } = props;
  const imgRef = useRef(null);
  const [dataSubmit, setdataSubmit] = useState({});
  const [imageChange, setImageChange] = useState(false);
  const [errorValidate, setErrorValidate] = useState({});
  const [isLoading, setIsloading] = useState(false);
  const [isSubmit, setISsubmit] = useState(false);
  const [openModalChange, setOpenModalChange] = useState(false);
  
  const handleOk = () => {
    // setIsModalOpen(false);
    console.log(123);
    HandleSubmit();
    setISsubmit(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    setErrorValidate({});
  };

  const HandleSubmit = () => {
    HandleValidateForm(dataSubmit);
  };

  const HandleDelete = (id) => {
    if (id) {
      APIDelete({ setIsloading, id });
    }
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
  }, [dataDetailUser]);

  useEffect(() => {
    if (errorValidate && Object.keys(errorValidate).length === 0 && isSubmit) {
      APIAddUser({
        dataSubmit: {
          ...dataSubmit,
          idSeat: dataDetailUser?.idSeat,
          idUser: dataDetailUser?.user?.idUser || null,
        },
        setIsModalOpen,
        setISsubmit,
        setIsloading,
      });
    }
  }, [errorValidate, isSubmit]);

  const HandleValidateForm = (data) => {
    const error = {};
    // if (!data.imageAvatar) {
    //   error.image = true;
    // }
    if (!data.name) {
      error.name = true;
    }
    if (!data.part) {
      error.part = true;
    }
    if (!data.phone) {
      error.phone = true;
    }
    if (!data.seat) {
      error.seat = true;
    }
    if (!data.code) {
      error.code = true;
    }
    setErrorValidate(error);
  };

  return (
    <>
      {openModalChange && (
        <ModalChange
          openModalChange={openModalChange}
          setOpenModalChange={setOpenModalChange}
          idRoom={dataDetailUser?.idRoom}
        />
      )}

      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        closeIcon={
          <img
            width={20}
            src={require("../../assets/icon-close.png")}
            alt=""
            onClick={handleCancel}
          />
        }
        footer={
          <>
            <Button
              onClick={() => {
                if (admin) {
                  HandleDelete(dataDetailUser?.idSeat);
                }
              }}
            >
              Xóa
            </Button>

            <Button
              type="link"
              onClick={() => {
                setOpenModalChange(true);
              }}
            >
              Đổi
            </Button>
            <Button type="primary" loading={isLoading} onClick={handleOk}>
              Xác nhận
            </Button>
          </>
        }
      >
        <div className="d-flex justify-content-center flex-column align-items-center">
          <div
            className="circle"
            style={{ borderColor: errorValidate.image && "#dc3545" }}
          >
            {dataSubmit?.imageAvatar ? (
              <img
                src={
                  imageChange
                    ? URL.createObjectURL(dataSubmit.imageAvatar)
                    : `https://drive.google.com/thumbnail?id=${dataSubmit?.imageAvatar}`
                }
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
            onChange={(event) => {
              setImageChange(true);
              setdataSubmit({
                ...dataSubmit,
                imageAvatar: event.target.files[0],
              });
            }}
            readOnly={!admin}
          />
        </div>

        <div>
          <p>Họ Và Tên</p>
          <Input
            value={dataSubmit?.name}
            status={errorValidate?.name && "error"}
            onChange={(event) =>
              setdataSubmit({ ...dataSubmit, name: event.target.value })
            }
            readOnly={!admin}
          />
        </div>
        <div className="mt-3">
          <div className="d-flex justify-content-between">
            <div style={{ width: "47%" }}>
              <p>Bộ phận</p>
              <Input
                value={dataSubmit?.part}
                status={errorValidate?.part && "error"}
                onChange={(event) =>
                  setdataSubmit({ ...dataSubmit, part: event.target.value })
                }
                readOnly={!admin}
              />
            </div>
            <div style={{ width: "47%" }}>
              <p>Số điện thoại</p>
              <Input
                value={dataSubmit?.phone}
                status={errorValidate?.phone && "error"}
                onChange={(event) =>
                  setdataSubmit({ ...dataSubmit, phone: event.target.value })
                }
                readOnly={!admin}
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
                status={errorValidate?.seat && "error"}
                readOnly
                onChange={(event) =>
                  setdataSubmit({ ...dataSubmit, seat: event.target.value })
                }
              />
            </div>
            <div style={{ width: "47%" }}>
              <p>Mã nhân viên</p>
              <Input
                value={dataSubmit?.code}
                status={errorValidate?.code && "error"}
                onChange={(event) =>
                  setdataSubmit({ ...dataSubmit, code: event.target.value })
                }
                readOnly={!admin}
              />
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}

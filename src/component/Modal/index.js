import React, { useEffect, useRef, useState } from "react";
import { Button, Input, Modal } from "antd";
import axios from "axios";

const APIAddUser = async (props) => {
  const { dataSubmit, setIsModalOpen, setISsubmit, setIsloading } = props;
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
  setIsloading(true);
  await axios
    .post(`http://localhost:3002/seat/seat-change/${id}`, params)
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

export default function ModalAddInfo(props) {
  const { isModalOpen, setIsModalOpen, dataDetailUser = {} } = props;
  const imgRef = useRef(null);
  const [dataSubmit, setdataSubmit] = useState({});
  const [errorValidate, setErrorValidate] = useState({});
  const [isLoading, setIsloading] = useState(false);
  const [isSubmit, setISsubmit] = useState(false);
  const handleOk = () => {
    // setIsModalOpen(false);
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

  const HandleDelete = () => {
    console.log("xóa");
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
            <Button onClick={HandleDelete}>Xóa</Button>
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
            status={errorValidate?.name && "error"}
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
                status={errorValidate?.part && "error"}
                onChange={(event) =>
                  setdataSubmit({ ...dataSubmit, part: event.target.value })
                }
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
              />
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}

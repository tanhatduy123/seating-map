import React, { useEffect, useRef, useState } from "react";
import { Button, Input, Modal } from "antd";

import ModalChange from "./ModalChange";
import { updateUser, UploadImges } from "../../api/route";

const APIUpload = async (props) => {
  const { base64 } = props;
  const res = await UploadImges(base64);
  return res;
};

const APIAddUser = async (props) => {
  const { dataSubmit, floor, setIsModalOpen, setISsubmit, setIsloading } =
    props;
  let resImg = {};
  if (dataSubmit?.base64Img) {
    resImg = await APIUpload({ base64: dataSubmit?.base64Img });
  }
  const params = {
    id: dataSubmit?.id,
    avatar: resImg?.url || dataSubmit?.avatar,
    name: dataSubmit?.name,
    code: dataSubmit?.code,
    part: dataSubmit?.part,
    phone: dataSubmit?.phone,
    seat: dataSubmit?.seat,
  };

  const response = await updateUser(floor, params);
  if (response.status === 200) {
    setIsModalOpen(false);
    setISsubmit(false);
    setIsloading(false);
    window.location.reload();
  } else {
    setIsModalOpen(false);
    setISsubmit(false);
    setIsloading(false);
    window.location.reload();
  }
};
const APIDelete = async (props) => {
  const { setIsloading, dataSubmit, floor } = props;
  setIsloading(true);
  const params = {
    id: dataSubmit?.id,
    avatar: "",
    name: "",
    code: "",
    part: "",
    phone: "",
    seat: dataSubmit?.seat,
  };
  const response = await updateUser(floor, params);
  if (response?.status === 200) {
    setIsloading(false);
    window.location.reload();
  } else {
    setIsloading(false);
    window.location.reload();
  }
};
export default function ModalAddInfo(props) {
  const admin = sessionStorage.getItem("admin");
  const { isModalOpen, setIsModalOpen, dataDetailUser = {}, floor } = props;
  const imgRef = useRef(null);
  const [dataSubmit, setdataSubmit] = useState({});
  const [errorValidate, setErrorValidate] = useState({});
  const [isLoading, setIsloading] = useState(false);
  const [isSubmit, setISsubmit] = useState(false);
  const [openModalChange, setOpenModalChange] = useState(false);
  const [base64Img, setBase64Img] = useState("");
  const handleOk = () => {
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
      APIDelete({
        floor: floor,
        setIsloading,
        dataSubmit: {
          ...dataSubmit,
          id: dataDetailUser?.id,
        },
      });
    }
  };
  useEffect(() => {
    if (dataDetailUser && Object.keys(dataDetailUser).length > 0) {
      setdataSubmit({
        ...dataSubmit,
        avatar: dataDetailUser?.avatar,
        name: dataDetailUser?.name,
        part: dataDetailUser?.part,
        phone: dataDetailUser?.phone,
        seat: dataDetailUser?.seat,
        code: dataDetailUser?.code,
      });
    }
  }, [dataDetailUser]);

  useEffect(() => {
    if (errorValidate && Object.keys(errorValidate).length === 0 && isSubmit) {
      APIAddUser({
        floor: floor,
        dataSubmit: {
          ...dataSubmit,
          id: dataDetailUser?.id,
          base64Img: base64Img,
        },
        setIsModalOpen,
        setISsubmit,
        setIsloading,
      });
    }
  }, [errorValidate, isSubmit]);

  useEffect(() => {
    if (openModalChange) handleCancel();
  }, [openModalChange]);

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
  console.log("floor", floor);
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
            <Button
              onClick={() => {
                if (admin) {
                  HandleDelete(dataDetailUser?.id);
                }
              }}
            >
              Xóa
            </Button>

            <Button
              onClick={() => {
                setOpenModalChange(true);
              }}
              danger
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
            {dataSubmit?.imageAvatar || dataDetailUser?.avatar ? (
              <img
                src={
                  base64Img
                    ? URL.createObjectURL(dataSubmit.imageAvatar)
                    : dataDetailUser?.avatar
                }
                alt=""
                onClick={() => imgRef.current.click()}
                style={{ cursor: "pointer" }}
              />
            ) : (
              <img
                src={
                  base64Img
                    ? URL.createObjectURL(dataSubmit.imageAvatar)
                    : dataDetailUser?.avatar ||
                      require("../../assets/user-defaut.png")
                }
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
              const file = event.target.files[0];
              if (file) {
                const reader = new FileReader();
                reader.onloadend = () => {
                  const base64Image = reader.result;
                  setBase64Img(base64Image);
                  // Cập nhật trạng thái hoặc thực hiện hành động với base64
                  setdataSubmit({
                    ...dataSubmit,
                    imageAvatar: file,
                  });
                };
                reader.readAsDataURL(file); // Đọc tệp dưới dạng base64
              }
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
      {openModalChange && (
        <ModalChange
          openModalChange={openModalChange}
          setOpenModalChange={setOpenModalChange}
          idRoom={dataDetailUser?.idRoom}
          idSeatOld={dataDetailUser?.idSeat}
        />
      )}
    </>
  );
}

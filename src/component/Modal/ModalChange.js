import React, { useEffect, useState } from "react";
import { Modal, Select, Button } from "antd";
import axios from "axios";
import { API_URL } from "../../config/indext";
const ApiGetAllFloor = async (props) => {
  const { setDataFloor, setFloors } = props;
  try {
    await axios.get(`${API_URL}/floor`).then((res) => {
      if (res) {
        setDataFloor(res.data.data);
      }
    });
  } catch (err) {
    console.log(err);
  }
};
const getLolcalFoor = async (props) => {
  const { floors, setDataSeatFloor } = props;
  try {
    await axios.get(`${API_URL}/seat/base-on-floor/${floors}`).then((res) => {
      if (res?.data?.status === 1) {
        setDataSeatFloor(res?.data?.allSeat);
      }
    });
  } catch (err) {
    console.log(err);
  }
};
const APIChangeSeat = async (props) => {
  const { idSeatOld, idSeatNew, handleCancel } = props;
  const params = {
    idOldSeat: idSeatOld,
    idNewSeat: idSeatNew,
  };
  try {
    await axios.put(`${API_URL}/seat/change-seat/`, params).then((res) => {
      console.log("res", res);
      if (res?.data?.status === 1) {
        handleCancel(false);
        window.location.reload();
      }
    });
  } catch (err) {
    console.log(err);
  }
};
const ModalChange = (props) => {
  const { setOpenModalChange, openModalChange, idSeatOld } = props;
  const [dataFloor, setDataFloor] = useState([]);
  const [floors, setFloors] = useState(null);
  const [dataSeatFloor, setDataSeatFloor] = useState([]);
  const [valueFloor, setValueFloor] = useState({});
  const handleCancel = () => {
    setOpenModalChange(false);
  };

  useEffect(() => {
    ApiGetAllFloor({ setFloors, setDataFloor });
  }, []);
  useEffect(() => {
    if (floors) {
      getLolcalFoor({ floors, setDataSeatFloor });
    }
  }, [floors]);
  const handleChangeSeat = () => {
    APIChangeSeat({
      idSeatOld: idSeatOld,
      idSeatNew: valueFloor,
      handleCancel,
    });
  };

  return (
    <Modal
      open={openModalChange}
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
          <Button onClick={handleCancel}>Hủy</Button>

          <Button onClick={handleChangeSeat}>Đổi</Button>
        </>
      }
    >
      <div>
        <p>Đổi chỗ</p>
      </div>
      <div className="mt-3 d-flex">
        <Select
          className="w-50"
          placeholder="Chọn Tầng"
          value={dataFloor.nameFloor}
          options={dataFloor.map((element) => {
            return {
              value: element.idFloor,
              label: element.nameFloor,
            };
          })}
          onChange={(value) => setFloors(value)}
        />
        {floors && dataSeatFloor.length > 0 && (
          <Select
            className="w-50 ms-2"
            placeholder="Vị Trí"
            value={dataSeatFloor.nameSeat}
            options={dataSeatFloor.map((element) => {
              return {
                value: element.idSeat,
                label: element.nameSeat,
              };
            })}
            onChange={(value) => setValueFloor(value)}
          />
        )}
      </div>
    </Modal>
  );
};

export default ModalChange;

import React, { useEffect, useState } from "react";
import { Modal, Select, Button } from "antd";
import axios from "axios";
import { API_URL } from "../../config/indext";
import { dataAllFloor } from "../../helpers/dataHelper";
import { getListUserFloorTranNao } from "../../api/route";

const APIGetListSeatInFloor = async ({ id, setDataSeatFloor }) => {
  if (id == 1) {
    const response = await getListUserFloorTranNao();
    if (response && response.length > 0) {
      const dataParser = response
        .sort((a, b) => a.id_seat - b.id_seat)
        .map((item) => {
          return {
            id: item.id_seat,
            value: item.seat,
          };
        });
      setDataSeatFloor(dataParser);
    }
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
    if (floors) {
      APIGetListSeatInFloor({
        id: dataAllFloor.find((item) => item.value === floors)?.id,
        setDataSeatFloor,
      });
    }
  }, [floors]);
  const handleChangeSeat = () => {
    APIChangeSeat({
      idSeatOld: idSeatOld,
      idSeatNew: valueFloor,
      handleCancel,
    });
  };
  console.log("dataSeatFloor", dataSeatFloor);
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

          <Button
            onClick={handleChangeSeat}
            type="primary"
            // style={{ backgroundColor: "#ED7F11" }}
          >
            Đổi
          </Button>
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
          options={dataAllFloor}
          onChange={(value) => setFloors(value)}
        />
        {floors && dataSeatFloor.length > 0 && (
          <Select
            className="w-50 ms-2"
            placeholder="Vị Trí"
            value={dataSeatFloor.nameSeat}
            options={dataSeatFloor}
            onChange={(value) => setValueFloor(value)}
          />
        )}
      </div>
    </Modal>
  );
};

export default ModalChange;

import React, { useEffect, useState } from "react";
import { Modal, Select, Button } from "antd";

import { dataAllFloor } from "../../helpers/dataHelper";
import {
  ChangeSeat,
  getListUserFloorEight,
  getListUserFloorNine,
  getListUserFloorSeven,
  getListUserFloorSix,
  getListUserFloorTen,
  getListUserFloorTranNao,
} from "../../api/route";

const APIGetListSeatInFloor = async ({ id, setDataSeatFloor }) => {
  if (id == 1) {
    const response = await getListUserFloorTranNao();
    if (response && response.length > 0) {
      const dataParser = response
        .filter((item) => item.seat)
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
  if (id == 2) {
    const response = await getListUserFloorSix();
    if (response && response.length > 0) {
      const dataParser = response
        .filter((item) => item.seat)
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
  if (id == 3) {
    const response = await getListUserFloorSeven();
    if (response && response.length > 0) {
      const dataParser = response
        .filter((item) => item.seat)
        .sort((a, b) => a.id_seat - b.id_seat)
        .map((item) => {
          return {
            id: item.id_seat,
            value: item.seat,
          };
        })
        .sort((a, b) => a.id - b.id);
      setDataSeatFloor(dataParser);
    }
  }
  if (id == 4) {
    const response = await getListUserFloorEight();
    if (response && response.length > 0) {
      const dataParser = response
        .filter((item) => item.seat)
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
  if (id == 5) {
    const response = await getListUserFloorNine();
    if (response && response.length > 0) {
      const dataParser = response
        .filter((item) => item.seat)
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
  if (id == 6) {
    const response = await getListUserFloorTen();
    if (response && response.length > 0) {
      const dataParser = response
        .filter((item) => item.seat)
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
  const { idCurrent, floorCurrent, valueFloorChange, idRoomChange } = props;

  const params = {
    idCurrent: idCurrent,
    idChange: idRoomChange,
    floorCurrent: floorCurrent,
    floorChange: valueFloorChange,
  };
  const response = await ChangeSeat(params);
  if (response.status === 200) {
    window.location.reload();
  }
};
const ModalChange = (props) => {
  const { setOpenModalChange, openModalChange, idSeatOld, roomCurrent } = props;
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
      idCurrent: idSeatOld,
      floorCurrent: roomCurrent,
      valueFloorChange: valueFloor,
      idRoomChange: floors,
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
          value={floors}
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

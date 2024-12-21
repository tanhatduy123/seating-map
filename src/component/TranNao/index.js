import React, { useEffect, useState } from "react";
import Seat from "../Seat";
import { getListUserFloorTranNao } from "../../api/route";
import { SeatUser } from "../../helpers";

const getDataRoomFloor = async (props) => {
  const { setIsloading, setDataRoom } = props;
  setIsloading(true);
  const response = await getListUserFloorTranNao();
  if (Object.keys(response).length > 0) {
    setDataRoom(response);
  }
  setIsloading(false);
};

export default function TranNao() {
  const [dataRoom, setDataRoom] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  useEffect(() => {
    if (!isLoading) {
      getDataRoomFloor({ setIsloading, setDataRoom });
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div className="container-floor" style={{ padding: "7% 10% 12% 7%" }}>
      <div className="d-flex">
        <Seat lyingHorizontally dataDetailUser={SeatUser(1, dataRoom)} />
        <Seat lyingHorizontally dataDetailUser={SeatUser(2, dataRoom)} />
        <Seat lyingHorizontally dataDetailUser={SeatUser(3, dataRoom)} />
      </div>
      <div>
        <div className="d-flex">
          <Seat lyingHorizontally dataDetailUser={SeatUser(4, dataRoom)} />
          <Seat lyingHorizontally dataDetailUser={SeatUser(5, dataRoom)} />
          <Seat lyingHorizontally dataDetailUser={SeatUser(6, dataRoom)} />
          <Seat lyingHorizontally dataDetailUser={SeatUser(7, dataRoom)} />
          <Seat lyingHorizontally dataDetailUser={SeatUser(8, dataRoom)} />
        </div>
        <div className="d-flex">
          <Seat horizontal dataDetailUser={SeatUser(9, dataRoom)} />
          <Seat horizontal dataDetailUser={SeatUser(10, dataRoom)} />
          <Seat horizontal dataDetailUser={SeatUser(11, dataRoom)} />
          <Seat horizontal dataDetailUser={SeatUser(12, dataRoom)} />
          <Seat horizontal dataDetailUser={SeatUser(13, dataRoom)} />
        </div>
      </div>
    </div>
  );
}

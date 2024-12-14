import React, { useEffect, useState } from "react";
import Seat from "../Seat";
import { getListUserFloorSix } from "../../api/route";
import { SeatUser } from "../../helpers";

const getDataRoomFloor = async (props) => {
  const { setIsloading, setDataRoom } = props;
  setIsloading(true);
  const response = await getListUserFloorSix();
  if (Object.keys(response).length > 0) {
    setDataRoom(response);
  }
  setIsloading(false);
};

export default function FloorSix() {
  const [dataRoom, setDataRoom] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  useEffect(() => {
    if (!isLoading) {
      getDataRoomFloor({ setIsloading, setDataRoom });
    }
    // eslint-disable-next-line
  }, []);
  return (
    <div className="container-floor justify-content-between align-items-end">
      <div
        className="d-flex align-items-center"
        style={{ margin: "20% 20% 0 0" }}
      >
        <div className="d-flex" style={{ marginRight: "30px" }}>
          <div>
            <Seat lyingVertically dataDetailUser={SeatUser(12, dataRoom)} />
            <Seat lyingVertically dataDetailUser={SeatUser(13, dataRoom)} />
            <Seat lyingVertically dataDetailUser={SeatUser(14, dataRoom)} />
          </div>
          <div>
            <Seat vertical dataDetailUser={SeatUser(9, dataRoom)} />
            <Seat vertical dataDetailUser={SeatUser(10, dataRoom)} />
            <Seat vertical dataDetailUser={SeatUser(11, dataRoom)} />
          </div>
        </div>
        <div>
          <div className="d-flex">
            <Seat lyingHorizontally dataDetailUser={SeatUser(1, dataRoom)} />
            <Seat lyingHorizontally dataDetailUser={SeatUser(2, dataRoom)} />
          </div>
          <div className="d-flex">
            <Seat horizontal dataDetailUser={SeatUser(3, dataRoom)} />
            <Seat horizontal dataDetailUser={SeatUser(4, dataRoom)} />
          </div>
        </div>

        <div>
          <Seat vertical dataDetailUser={SeatUser(5, dataRoom)} />
          <Seat vertical dataDetailUser={SeatUser(6, dataRoom)} />
          <Seat vertical dataDetailUser={SeatUser(7, dataRoom)} />
        </div>
      </div>
      <div style={{ marginRight: "15%" }}>
        <Seat horizontal dataDetailUser={SeatUser(8, dataRoom)} />
      </div>
    </div>
  );
}

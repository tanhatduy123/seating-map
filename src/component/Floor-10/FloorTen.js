import React, { useEffect, useState } from "react";
import Seat from "../Seat";
import SeatManage from "../SeatManage";
import { getListUserFloorTen } from "../../api/route";
import { SeatUser } from "../../helpers";
const getDataRoomFloor = async (props) => {
  const { setIsloading, setDataRoom } = props;
  setIsloading(true);
  const response = await getListUserFloorTen();
  setDataRoom(response);
};

export default function FloorNine() {
  const [dataRoom, setDataRoom] = useState();
  const [isLoading, setIsloading] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      getDataRoomFloor({ setDataRoom, setIsloading });
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div
      className="container-floor position-relative"
      style={{ flexDirection: "row", height: "100vh" }}
    >
      <div className="board"></div>
      <div className="d-flex flex-column justify-content-between w-75">
        <div className="d-flex justify-content-between">
          <div className="d-flex mt-2 ms-2">
            {[...Array(2)].map((_, index) => (
              <Seat horizontal dataDetailUser={SeatUser(index + 2, dataRoom)} />
            ))}
          </div>
          <div className="d-flex mt-2 me-2">
            {[...Array(3)].map((_, index) => (
              <Seat horizontal dataDetailUser={SeatUser(index + 4, dataRoom)} />
            ))}
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <div className="d-flex mb-2 ms-2">
            {[...Array(2)].map((_, index) => (
              <Seat
                lyingHorizontally
                dataDetailUser={SeatUser(index + 7, dataRoom)}
              />
            ))}
          </div>
          <div className="d-flex mb-2 me-2">
            {[...Array(3)].map((_, index) => (
              <Seat
                lyingHorizontally
                dataDetailUser={SeatUser(index + 9, dataRoom)}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="d-flex flex-column justify-content-between position-relative">
        <div
          style={{
            height: "30%",
            borderLeft: "10px solid #b2572a",
          }}
        />
        <div
          style={{
            height: "20%",
            borderLeft: "5px solid #b2572a",
            transform: "rotate(345deg)",
            marginLeft: "15px",
          }}
        />
        <div
          style={{
            height: "50%",
            borderLeft: "10px solid #b2572a",
          }}
        />
      </div>

      <div className="d-flex justify-content-center align-items-center w-25">
        <SeatManage vertical dataUser={SeatUser(1, dataRoom)} />
      </div>
    </div>
  );
}

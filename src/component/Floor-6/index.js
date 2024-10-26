import React, { useEffect, useState } from "react";
import Seat from "../Seat";
import { getListUserFloorSix } from "../../api/route";

const getDataRoomFloor = async (props) => {
  const { setIsloading, setDataRoom } = props;
  setIsloading(true);
  const response = await getListUserFloorSix();
  if (Object.keys(response).length > 0) {
    setDataRoom(response);
  }
  setIsloading(false);
  // setIsloading(true);
  // await axios
  //   .get(`${API_URL}/seat/floor6`)
  //   .then((res) => {
  //     setIsloading(false);
  //     const response = res.data.data_small_room;
  //     setDataRoom(response);
  //   })
  //   .catch((error) => {
  //     setIsloading(false);
  //     console.log(error);
  //   });
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
  console.log("dataRoom", dataRoom);
  return (
    <div className="container-floor justify-content-between align-items-end">
      <div
        className="d-flex align-items-center"
        style={{ margin: "20% 20% 0 0" }}
      >
        <div className="d-flex" style={{ marginRight: "30px" }}>
          <div>
            <Seat lyingVertically />
          </div>
          <div>
            <Seat vertical />
            <Seat vertical />
            <Seat vertical />
          </div>
        </div>
        <div>
          <div className="d-flex">
            <Seat lyingHorizontally dataDetailUser={dataRoom && dataRoom[0]} />
            <Seat lyingHorizontally dataDetailUser={dataRoom && dataRoom[1]} />
          </div>
          <div className="d-flex">
            <Seat horizontal dataDetailUser={dataRoom && dataRoom[2]} />
            <Seat horizontal dataDetailUser={dataRoom && dataRoom[3]} />
          </div>
        </div>

        <div>
          <Seat vertical dataDetailUser={dataRoom && dataRoom[4]} />
          <Seat vertical dataDetailUser={dataRoom && dataRoom[5]} />
          <Seat vertical dataDetailUser={dataRoom && dataRoom[6]} />
        </div>
      </div>
      <div style={{ marginRight: "15%" }}>
        <Seat horizontal dataDetailUser={dataRoom && dataRoom[7]} />
      </div>
    </div>
  );
}

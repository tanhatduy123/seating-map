import React, { useEffect, useState } from "react";
import Seat from "../Seat";
import axios from "axios";
import SeatManage from "../SeatManage";
import { API_URL } from "../../config/indext";
const getDataFloorNine = async (props) => {
  const { setIsloading, setDataFloorNine } = props;
  setIsloading(true);
  await axios
    .get(`${API_URL}/seat/floor9`)
    .then((res) => {
      setIsloading(false);
      const persons = res.data;
      setDataFloorNine(persons);
    })
    .catch((error) => {
      setIsloading(false);
      console.log(error);
    });
};

export default function FloorNine() {
  const [isloading, setIsloading] = useState(false);
  const [dataFloorNine, setDataFloorNine] = useState([]);
  useEffect(() => {
    if (!isloading) {
      getDataFloorNine({ setIsloading, setDataFloorNine });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // console.log("dataFloorNine", dataFloorNine);
  return (
    <div className="container-floor" style={{ flexDirection: "row" }}>
      <div className="wrap-room-meeting">
        <div className="room-meeting-top">
          <div
            className="door-room"
            style={{
              width: "50%",
              top: "15%",
              right: "-25%",
              transform: "rotate(80deg)",
            }}
          />
          <div
            className="line-height"
            style={{ height: "70%", right: 0, bottom: 0 }}
          />
          <div className="pt-5">
            <SeatManage horizontal />
          </div>
        </div>
        <div className="room-meeting-bot">
          <div
            className="door-room"
            style={{
              width: "50%",
              top: "15%",
              right: "-25%",
              transform: "rotate(100deg)",
            }}
          />
          <div
            className="line-height"
            style={{ height: "70%", right: 0, bottom: 0 }}
          />

          <div
            className="w-100 d-flex flex-column align-items-center"
            style={{ paddingTop: "150px" }}
          >
            <SeatManage lyingHorizontally />
          </div>
        </div>
      </div>
      <div className="d-flex flex-column flex-grow-1 justify-content-between position-relative">
        <div className="d-flex flex-column position-absolute top-0 end-0">
          {[...Array(4)].map(() => (
            <div className="cabinet-vertical" />
          ))}
        </div>
        <div className="d-flex justify-content-between">
          <div className="d-flex" style={{ marginLeft: "10%" }}>
            <div className="wardrobe" />
            <div>
              <div className="d-flex">
                {dataFloorNine?.data_room_9_1 ? (
                  dataFloorNine?.data_room_9_1[0].map((item) => (
                    <Seat horizontal dataDetailUser={item} />
                  ))
                ) : (
                  <>
                    {[...Array(6)].map(() => (
                      <Seat horizontal />
                    ))}
                  </>
                )}
                <Seat horizontal />
              </div>
            </div>
            <div className="wardrobe" />
          </div>
          <div className="d-flex" style={{ marginRight: "7%" }}>
            <div className="cabinet" />
            <div className="cabinet" />
          </div>
        </div>
        <div
          className="d-flex"
          style={{ marginLeft: "10%", marginBottom: "8%" }}
        >
          <div>
            <div className="d-flex">
              {dataFloorNine?.data_room_9_2 ? (
                dataFloorNine?.data_room_9_2[0].map((item) => (
                  <Seat lyingHorizontally dataDetailUser={item} />
                ))
              ) : (
                <>
                  {[...Array(6)].map(() => (
                    <Seat lyingHorizontally />
                  ))}
                </>
              )}
            </div>
            <div className="d-flex">
              {dataFloorNine?.data_room_9_3 ? (
                dataFloorNine?.data_room_9_3[0].map((item) => (
                  <Seat horizontal dataDetailUser={item} />
                ))
              ) : (
                <>
                  {[...Array(6)].map(() => (
                    <Seat horizontal />
                  ))}
                </>
              )}
            </div>
          </div>
          <div className="filing-cabinets">
            <span>Bàn tủ hồ sơ</span>
          </div>
        </div>
      </div>
    </div>
  );
}

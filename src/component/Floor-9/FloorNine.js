import React, { useEffect, useState } from "react";
import Seat from "../Seat";
import SeatManage from "../SeatManage";
import { getListUserFloorNine } from "../../api/route";
import { SeatUser } from "../../helpers";
const getDataFloorNine = async (props) => {
  const { setIsloading, setDataFloorNine } = props;
  setIsloading(true);
  const response = await getListUserFloorNine();
  setDataFloorNine(response);
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
            <SeatManage horizontal dataUser={SeatUser(1, dataFloorNine)} />
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
            <SeatManage
              lyingHorizontally
              dataUser={SeatUser(2, dataFloorNine)}
            />
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
                {[...Array(7)].map((_, index) => (
                  <Seat
                    horizontal
                    dataDetailUser={SeatUser(index + 3, dataFloorNine)}
                  />
                ))}
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
              {[...Array(6)].map((_, index) => (
                <Seat
                  lyingHorizontally
                  dataDetailUser={SeatUser(index + 10, dataFloorNine)}
                />
              ))}
            </div>
            <div className="d-flex">
              {[...Array(6)].map((_, index) => (
                <Seat
                  horizontal
                  dataDetailUser={SeatUser(index + 16, dataFloorNine)}
                />
              ))}
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

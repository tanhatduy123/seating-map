import React, { useEffect, useState } from "react";
import Seat from "../Seat";
import SeatManage from "../SeatManage";
import { SeatUser } from "../../helpers";
import { getListUserFloorEight } from "../../api/route";

const getDataRoomFloor = async (props) => {
  const { setIsloading, setDataRoom } = props;
  setIsloading(true);
  const response = await getListUserFloorEight();
  setDataRoom(response);
};
export default function FloorEighth() {
  const [dataRoom, setDataRoom] = useState();
  const [isLoading, setIsloading] = useState(false);
  useEffect(() => {
    if (!isLoading) {
      getDataRoomFloor({ setIsloading, setDataRoom });
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div
      className="container-floor"
      style={{ flexDirection: "row", justifyContent: "start" }}
    >
      <div className="wrap-room-meeting">
        <div className="room-meeting-top">
          <div
            className="door-room"
            style={{
              width: "50%",
              bottom: "13%",
              right: "-25%",
              transform: "rotate(100deg)",
            }}
          />
          <div
            className="line-height"
            style={{ height: "70%", right: 0, top: 0 }}
          />
          <div className="pt-5">
            <SeatManage horizontal dataUser={SeatUser(1, dataRoom)} />
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
          <div className="d-flex flex-column align-items-center">
            <img
              src={require("../../assets/table-meeting.png")}
              style={{ width: "80%" }}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="w-100 d-flex flex-column justify-content-between">
        <div>
          <div className="d-flex">
            <div className="room">
              <Seat vertical dataDetailUser={SeatUser(2, dataRoom)} />
              <div className="container">
                <div className="d-flex align-items-end">
                  <div style={{ marginLeft: "20%" }}>
                    <Seat vertical dataDetailUser={SeatUser(3, dataRoom)} />
                    <Seat vertical dataDetailUser={SeatUser(4, dataRoom)} />
                  </div>
                </div>
              </div>

              <div>
                <Seat vertical dataDetailUser={SeatUser(5, dataRoom)} />
                <Seat vertical dataDetailUser={SeatUser(6, dataRoom)} />
              </div>
              <div className="door-room" style={{ bottom: "10%" }} />
              <div
                className="line"
                style={{ width: "80%", bottom: 0, right: 0 }}
              />
            </div>
            <div className="position-relative" style={{ width: "65%" }}>
              <div
                className="door-room"
                style={{ width: "17%", bottom: "10%" }}
              >
                <p>Thang bộ</p>
              </div>
              <div
                className="line"
                style={{ width: "70%", left: "17%", bottom: 0 }}
              />
              <div
                className="door-room"
                style={{
                  width: "13%",
                  bottom: "10%",
                  right: 0,
                  transform: "rotate(350deg)",
                }}
              >
                <p>Thang máy</p>
              </div>
            </div>
          </div>
          <div
            className="d-flex justify-content-between"
            style={{ marginLeft: "10%" }}
          >
            <div className="d-flex">
              <Seat
                horizontal
                width="100"
                dataDetailUser={SeatUser(7, dataRoom)}
              />
              <Seat
                horizontal
                width="100"
                dataDetailUser={SeatUser(8, dataRoom)}
              />
              <Seat
                horizontal
                width="100"
                dataDetailUser={SeatUser(9, dataRoom)}
              />
            </div>
            <div className="w-50 d-flex">
              <div className="d-flex">
                <Seat
                  horizontal
                  width="100"
                  dataDetailUser={SeatUser(10, dataRoom)}
                />

                <Seat
                  horizontal
                  width="100"
                  dataDetailUser={SeatUser(11, dataRoom)}
                />
              </div>

              <div className="w-100">
                <div
                  style={{
                    height: "160%",
                    borderBottom: "10px solid #b2572a",
                    borderLeft: "10px solid #b2572a",
                  }}
                />
                <div className="d-flex">
                  <Seat horizontal dataDetailUser={SeatUser(22, dataRoom)} />

                  <Seat horizontal dataDetailUser={SeatUser(23, dataRoom)} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex" style={{ marginBottom: "10%" }}>
          <div style={{ marginLeft: "10%" }}>
            <div className="d-flex">
              {[...Array(5)].map((_, index) => (
                <Seat
                  lyingHorizontally
                  dataDetailUser={SeatUser(index + 12, dataRoom)}
                />
              ))}
            </div>
            <div className="d-flex">
              {[...Array(5)].map((_, index) => (
                <Seat
                  horizontal
                  dataDetailUser={SeatUser(index + 17, dataRoom)}
                />
              ))}
            </div>
          </div>
          {/*  */}
        </div>
        <div className="w-100 h-100 d-flex flex-column justify-content-end">
          <div className="d-flex">
            <div style={{ marginLeft: "10%" }}>
              <div className="d-flex">
                {[...Array(5)].map((_, index) => (
                  <Seat
                    lyingHorizontally
                    dataDetailUser={SeatUser(index + 24, dataRoom)}
                  />
                ))}
              </div>
            </div>
            <div style={{ marginLeft: "26%" }}>
              <div className="d-flex">
                {[...Array(2)].map((_, index) => (
                  <Seat
                    lyingHorizontally
                    dataDetailUser={SeatUser(index + 29, dataRoom)}
                  />
                ))}
              </div>
            </div>
          </div>
          <div
            style={{
              borderTop: "10px solid #b2572a",
              borderRight: "10px solid #b2572a",
              width: "85%",
              height: "50px",
            }}
          />
        </div>
      </div>
    </div>
  );
}

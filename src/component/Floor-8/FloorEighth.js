import React, { useEffect, useState } from "react";
import Seat from "../Seat";
import axios from "axios";
const getDataSmallRoomFloor = async (props) => {
  const { setIsloading, setDataSmallRoom } = props;
  setIsloading(true);
  await axios
    .get(`http://localhost:3002/seat/floor8-small-room`)
    .then((res) => {
      setIsloading(false);
      const response = res.data.data_small_room;
      setDataSmallRoom(response);
    })
    .catch((error) => {
      setIsloading(false);
      console.log(error);
    });
};

const getDataRoomFloor = async (props) => {
  const { setIsloading, setDataRoom } = props;
  setIsloading(true);
  await axios
    .get(`http://localhost:3002/seat/floor8`)
    .then((res) => {
      setIsloading(false);
      const response = res.data;
      setDataRoom(response);
    })
    .catch((error) => {
      setIsloading(false);
      console.log(error);
    });
};
export default function FloorEighth() {
  const [dataSmallRoom, setDataSmallRoom] = useState([]);
  const [dataRoom, setDataRoom] = useState();
  const [isLoading, setIsloading] = useState(false);
  useEffect(() => {
    if (!isLoading) {
      getDataSmallRoomFloor({ setIsloading, setDataSmallRoom });
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
          <div className="d-flex flex-column align-items-center">
            <img
              src={require("../../assets/chair.jpg")}
              style={{ width: "30%", marginTop: "30px" }}
              alt=""
            />
            <div
              className="d-flex align-items-center justify-content-center"
              style={{
                backgroundColor: "#b2572a",
                width: "70%",
                height: "80px",
              }}
            >
              <span style={{ color: "#fff" }}>Cô Tâm</span>
            </div>
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
              <Seat
                vertical
                dataDetailUser={dataSmallRoom && dataSmallRoom[0]}
              />
              <div className="container">
                <div className="d-flex align-items-end">
                  <div style={{ marginLeft: "20%" }}>
                    <Seat
                      vertical
                      dataDetailUser={dataSmallRoom && dataSmallRoom[1]}
                    />
                    <Seat
                      vertical
                      dataDetailUser={dataSmallRoom && dataSmallRoom[2]}
                    />
                  </div>
                </div>
              </div>

              <div>
                <Seat
                  vertical
                  dataDetailUser={dataSmallRoom && dataSmallRoom[3]}
                />
                <Seat
                  vertical
                  dataDetailUser={dataSmallRoom && dataSmallRoom[4]}
                />
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
                dataDetailUser={
                  dataRoom?.seven_seat_first?.length > 0 &&
                  dataRoom?.seven_seat_first[0]
                }
              />
              <Seat
                horizontal
                width="100"
                dataDetailUser={
                  dataRoom?.seven_seat_first?.length > 0 &&
                  dataRoom?.seven_seat_first[1]
                }
              />
              <Seat
                horizontal
                width="100"
                dataDetailUser={
                  dataRoom?.seven_seat_first?.length > 0 &&
                  dataRoom?.seven_seat_first[2]
                }
              />
            </div>
            <div className="w-50 d-flex">
              <div className="d-flex">
                <Seat
                  horizontal
                  width="100"
                  dataDetailUser={
                    dataRoom?.seven_seat_first?.length > 0 &&
                    dataRoom?.seven_seat_first[3]
                  }
                />

                <Seat
                  horizontal
                  width="100"
                  dataDetailUser={
                    dataRoom?.seven_seat_first?.length > 0 &&
                    dataRoom?.seven_seat_first[4]
                  }
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
                  <Seat
                    horizontal
                    dataDetailUser={
                      dataRoom?.seven_seat_first?.length > 0 &&
                      dataRoom?.seven_seat_first[5]
                    }
                  />

                  <Seat
                    horizontal
                    dataDetailUser={
                      dataRoom?.seven_seat_first?.length > 0 &&
                      dataRoom?.seven_seat_first[6]
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex" style={{ marginBottom: "10%" }}>
          <div style={{ marginLeft: "10%" }}>
            <div className="d-flex">
              {dataRoom?.center_seat_1?.length > 0 ? (
                dataRoom?.center_seat_1.map((item) => (
                  <Seat lyingHorizontally dataDetailUser={item} />
                ))
              ) : (
                <>
                  {[...Array(5)].map(() => (
                    <Seat lyingHorizontally />
                  ))}
                </>
              )}
            </div>
            <div className="d-flex">
              {dataRoom?.center_seat_2?.length > 0 ? (
                dataRoom?.center_seat_2.map((item) => (
                  <Seat horizontal dataDetailUser={item} />
                ))
              ) : (
                <>
                  {[...Array(5)].map(() => (
                    <Seat horizontal />
                  ))}
                </>
              )}
            </div>
          </div>
          {/*  */}
        </div>
        <div className="w-100 h-100 d-flex flex-column justify-content-end">
          <div className="d-flex">
            <div style={{ marginLeft: "10%" }}>
              <div className="d-flex">
                {dataRoom?.center_seat_3?.length > 0 ? (
                  dataRoom?.center_seat_3.map((item) => (
                    <Seat lyingHorizontally dataDetailUser={item} />
                  ))
                ) : (
                  <>
                    {[...Array(5)].map(() => (
                      <Seat lyingHorizontally />
                    ))}
                  </>
                )}
              </div>
            </div>
            <div style={{ marginLeft: "26%" }}>
              <div className="d-flex">
                {dataRoom?.two_seat_last?.length > 0 ? (
                  dataRoom?.two_seat_last.map((item) => (
                    <Seat lyingHorizontally dataDetailUser={item} />
                  ))
                ) : (
                  <>
                    {[...Array(2)].map(() => (
                      <Seat lyingHorizontally />
                    ))}
                  </>
                )}
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

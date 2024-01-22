import React from "react";
import Seat from "../Seat";

export default function FloorNine() {
  return (
    <div
      className="container-floor"
      style={{ flexDirection: "row", height: "100vh" }}
    >
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
              <span style={{ color: "#fff" }}>Anh Văn</span>
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
          <div
            className="d-flex flex-column align-items-center"
            style={{ paddingTop: "150px" }}
          >
            <div
              className="d-flex align-items-center justify-content-center"
              style={{
                backgroundColor: "#b2572a",
                width: "70%",
                height: "80px",
              }}
            >
              <span style={{ color: "#fff" }}>Chú Sang</span>
            </div>
            <img
              src={require("../../assets/chair.jpg")}
              style={{
                width: "30%",
                marginTop: "30px",
                transform: "rotate(180deg)",
              }}
              alt=""
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
                {[...Array(6)].map(() => (
                  <Seat horizontal />
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
              {[...Array(6)].map(() => (
                <Seat lyingHorizontally />
              ))}
            </div>
            <div className="d-flex">
              {[...Array(6)].map(() => (
                <Seat horizontal />
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

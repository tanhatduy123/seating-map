import React from "react";
import Seat from "../Seat";

export default function FloorEighth() {
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
      <div className="w-100">
        <div className="d-flex">
          <div className="room">
            <Seat vertical />
            <div className="container">
              <div className="d-flex align-items-end">
                <div>
                  <Seat lyingVertically />
                </div>
                <div>
                  <Seat vertical />
                  <Seat vertical />
                </div>
              </div>
            </div>

            <div>
              <Seat vertical />
              <Seat vertical />
            </div>
            <div className="door-room" style={{ bottom: "10%" }} />
            <div
              className="line"
              style={{ width: "80%", bottom: 0, right: 0 }}
            />
          </div>
          <div className="position-relative" style={{ width: "65%" }}>
            <div className="door-room" style={{ width: "17%", bottom: "10%" }}>
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
            <Seat horizontal width="100" />
            <Seat horizontal width="100" />
            <Seat horizontal width="100" />
          </div>
          <div className="w-50 d-flex">
            <div className="d-flex">
              {[...Array(2)].map(() => (
                <Seat horizontal width="100" />
              ))}
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
                {[...Array(2)].map(() => (
                  <Seat horizontal />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex" style={{ marginBottom: "10%" }}>
          <div style={{ marginLeft: "10%" }}>
            <div className="d-flex">
              {[...Array(5)].map(() => (
                <Seat lyingHorizontally />
              ))}
            </div>
            <div className="d-flex">
              {[...Array(5)].map(() => (
                <Seat horizontal />
              ))}
            </div>
          </div>
          {/*  */}
        </div>
        <div className="d-flex">
          <div style={{ marginLeft: "10%" }}>
            <div className="d-flex">
              {[...Array(5)].map(() => (
                <Seat lyingHorizontally />
              ))}
            </div>
          </div>
          <div style={{ marginLeft: "26%" }}>
            <div className="d-flex">
              {[...Array(2)].map(() => (
                <Seat lyingHorizontally />
              ))}
            </div>
          </div>
        </div>
        <div className="d-flex" style={{ height: "16%" }}>
          <div
            style={{
              borderTop: "10px solid #b2572a",
              borderRight: "10px solid #b2572a",
              width: "85%",
            }}
          />
        </div>
      </div>
    </div>
  );
}

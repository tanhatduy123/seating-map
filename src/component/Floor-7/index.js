import React from "react";
import Seat from "../Seat";

export default function FloorSeven() {
  return (
    <div className="container-floor-seven">
      <div>
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
            <div className="door-room" />
            <div className="line" />
          </div>
          <div className="position-relative" style={{ width: "65%" }}>
            <div className="door-room" style={{ width: "17%" }}>
              <p>Thang bộ</p>
            </div>
            <div className="line" style={{ left: "17%" }} />
            <div
              className="door-room"
              style={{ width: "13%", right: 0, transform: "rotate(350deg)" }}
            >
              <p>Thang máy</p>
            </div>
          </div>
        </div>
        <div className="d-flex" style={{ marginLeft: "15%" }}>
          <Seat horizontal width="100" />
          <Seat horizontal width="100" />
          <Seat horizontal width="100" />
          <div style={{ marginLeft: "35%" }}>
            <Seat horizontal width="100" />
          </div>
        </div>
      </div>

      <div className="d-flex">
        <div style={{ marginLeft: "15%" }}>
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
        <div style={{ marginLeft: "25%" }}>
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
      </div>
      <div>
        <div className="d-flex">
          <div style={{ marginLeft: "15%" }}>
            <div className="d-flex">
              {[...Array(5)].map(() => (
                <Seat lyingHorizontally />
              ))}
            </div>
          </div>
          <div style={{ marginLeft: "25%" }}>
            <div className="d-flex">
              {[...Array(5)].map(() => (
                <Seat lyingHorizontally />
              ))}
            </div>
          </div>
        </div>
        <div className="d-flex">
          <div
            style={{
              borderTop: "10px solid #cf5454",
              borderRight: "10px solid #cf5454",
              width: "85%",
            }}
          />
          <div className="d-flex">
            <Seat horizontal />
            <Seat horizontal />
          </div>
        </div>
      </div>
    </div>
  );
}

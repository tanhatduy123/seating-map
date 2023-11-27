import React from "react";
import Seat from "../Seat";

export default function FloorSeven() {
  return (
    <div className="container-floor-seven">
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
      <div style={{ display: "flex", marginLeft: "12%" }}>
        <Seat horizontal width="100" />
        <Seat horizontal width="100" />
        <Seat horizontal width="100" />
      </div>
    </div>
  );
}

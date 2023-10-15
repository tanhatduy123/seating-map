import React from "react";
import Seat from "../Seat";

export default function FloorSeven() {
  return (
    <div className="container-floor-seven">
      <div className="room">
        <Seat vertical />
        <div className="door-room" />
        <div className="line" />
      </div>
    </div>
  );
}

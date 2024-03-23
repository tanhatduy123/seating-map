import React from "react";
import Seat from "../Seat";

export default function FloorSix() {
  return (
    <div className="container-floor justify-content-between align-items-end">
      <div
        className="d-flex align-items-center"
        style={{ margin: "10% 20% 0 0" }}
      >
        <div>
          <div className="d-flex">
            <Seat lyingHorizontally />
            <Seat lyingHorizontally />
          </div>
          <div className="d-flex">
            <Seat horizontal />
            <Seat horizontal />
          </div>
        </div>

        <div>
          <Seat vertical />
          <Seat vertical />
          <Seat vertical />
        </div>
      </div>
      <div style={{ marginRight: "15%" }}>
        <Seat horizontal />
      </div>
    </div>
  );
}

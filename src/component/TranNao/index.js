import React from "react";
import Seat from "../Seat";

export default function TranNao() {
  return (
    <div className="container-floor" style={{ padding: "7% 10% 12% 7%" }}>
      <div className="d-flex">
        <Seat lyingHorizontally />
        <Seat lyingHorizontally />
        <Seat lyingHorizontally />
      </div>
      <div>
        <div className="d-flex">
          <Seat lyingHorizontally />
          <Seat lyingHorizontally />
          <Seat lyingHorizontally />
          <Seat lyingHorizontally />
          <Seat lyingHorizontally />
        </div>
        <div className="d-flex">
          <Seat horizontal />
          <Seat horizontal />
          <Seat horizontal />
          <Seat horizontal />
          <Seat horizontal />
        </div>
      </div>
    </div>
  );
}

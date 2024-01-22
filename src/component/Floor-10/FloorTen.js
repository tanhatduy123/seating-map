import React from "react";
import Seat from "../Seat";

export default function FloorNine() {
  return (
    <div
      className="container-floor position-relative"
      style={{ flexDirection: "row", height: "100vh" }}
    >
      <div className="board"></div>
      <div className="d-flex flex-column justify-content-between w-75">
        <div className="d-flex justify-content-between">
          <div className="d-flex mt-2 ms-2">
            {[...Array(2)].map(() => (
              <Seat horizontal />
            ))}
          </div>
          <div className="d-flex mt-2 me-2">
            {[...Array(3)].map(() => (
              <Seat horizontal />
            ))}
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <div className="d-flex mb-2 ms-2">
            {[...Array(2)].map(() => (
              <Seat lyingHorizontally />
            ))}
          </div>
          <div className="d-flex mb-2 me-2">
            {[...Array(3)].map(() => (
              <Seat lyingHorizontally />
            ))}
          </div>
        </div>
      </div>
      <div className="d-flex flex-column justify-content-between position-relative">
        <div
          style={{
            height: "30%",
            borderLeft: "10px solid #b2572a",
          }}
        />
        <div
          style={{
            height: "20%",
            borderLeft: "5px solid #b2572a",
            transform: "rotate(345deg)",
            marginLeft: "15px",
          }}
        />
        <div
          style={{
            height: "50%",
            borderLeft: "10px solid #b2572a",
          }}
        />
      </div>

      <div className="d-flex justify-content-center align-items-center w-25">
        <div className="d-flex align-items-center justify-content-center">
          <div className="d-flex align-items-center justify-content-center cabinet-vertical">
            <span style={{ color: "#fff" }}>Chị Kathy</span>
          </div>
          <img
            src={require("../../assets/chair.jpg")}
            style={{
              width: "30%",
              marginTop: "30px",
              transform: "rotate(90deg)",
            }}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

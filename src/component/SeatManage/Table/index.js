import React from "react";

export default function Table(props) {
  const { nameUser, vertical, horizontal } = props;
  return (
    <>
      {horizontal && (
        <div
          className="d-flex align-items-center justify-content-center"
          style={{
            backgroundColor: "#b2572a",
            width: "70%",
            height: "80px",
          }}
        >
          <span style={{ color: "#fff" }}>{nameUser}</span>
        </div>
      )}
      {vertical && (
        <div className="d-flex align-items-center justify-content-center cabinet-vertical">
          <span style={{ color: "#fff" }}>{nameUser}</span>
        </div>
      )}
    </>
  );
}
